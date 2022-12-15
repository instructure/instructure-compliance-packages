// Modules
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { View, Table, Heading, Text, Tooltip, IconButton, IconCopyLine } from '@instructure/ui'

// Components
import Links from 'components/links'

// Variables
const globalBrands = ["Instructure", "Canvas", "Mastery", "Elevate", "Impact"]

// Page
export default function LinksTable() {

  const fromPrefix = 'inst.bid'

  return (
    <View as="div">
      <View as="div" margin="none none x-large">
        <Heading level="h1">Redirect Links</Heading>
        <Text>
          This page provides a collection of shortened URLs for use in RFP responses. 
          Each row has a short URL and the original URL. 
          Click on the copy icon <IconCopyLine title="Copy Icon" /> and the short URL will be added to your clipboard.
        </Text>
      </View>
      {
        (Links).map( brands => {
          let brand = brands.brand
          return(
            <View
              key={brand}
              as="div"
              margin="none none xx-large"
            >
              <Heading
                level={ globalBrands.includes(brand) ? "h2" : "h3" }
                id={brand}
              >
                {brand}
              </Heading>
              <Table hover caption={brand}>
                <Table.Head>
                  <Table.Row>
                    <Table.ColHeader id="Title" width='25%'>
                      Title
                    </Table.ColHeader>
                    <Table.ColHeader id="URLs">
                      Links
                    </Table.ColHeader>
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  {
                    (brands.links).map( link => {
                      if( link.from !== null) {
                        return(
                          <Table.Row key={link.title}>
                            <Table.Cell>
                              <Text>{link.title}</Text>
                            </Table.Cell>
                            <Table.Cell>
                              <Text>{ `${fromPrefix}${link.from}` }</Text>&nbsp;&nbsp;
                              <Tooltip
                                renderTip="Copy"
                                on={['hover', 'focus']}
                                placement="top"
                                color="primary-inverse"
                              >
                                <CopyToClipboard text={ `${fromPrefix}${link.from}` }>
                                  <IconButton
                                    withBackground={false}
                                    withBorder={false}
                                    screenReaderLabel="Copy URL to clipboard"
                                  >
                                    <IconCopyLine />
                                  </IconButton>
                                </CopyToClipboard>
                                </Tooltip>
                                <br />
                                <Text size="small" color="secondary">{link.to}</Text>
                            </Table.Cell>
                          </Table.Row>
                        )
                      }
                    })
                  }
                </Table.Body>
              </Table>
            </View>
          )
        })
      }
    </View>
  )
}
// Modules
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { View, Table, Heading, Text, Tooltip, IconButton, IconCopyLine } from '@instructure/ui'

// Components
import Links from 'components/links'

// Page
export default function LinksTable() {

  const fromPrefix = 'https://inst.bid'

  return (
    <View as="div">
    {
      (Links.data).map( i => {
        return(
          <View
            key={i.brand}
            as="div"
            margin="none none xx-large"
          >
            <Heading
              level="h2"
              id={ `${i.brand.toLowerCase()}Brand` }
            >
              {i.brand}
            </Heading>
            <Table hover caption={i.brand}>
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
                  (i.links).map( link => {
                    return(
                      <Table.Row key={link.title}>
                        <Table.Cell>
                          <Text>{link.title}</Text>
                        </Table.Cell>
                        <Table.Cell>
                          <Text>{link.from}</Text>&nbsp;
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
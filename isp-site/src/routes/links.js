// Modules
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {  View,
          Table,
          Heading,
          Text,
          Tooltip,
          IconButton,
          IconCopyLine,
          TextInput,
          IconSearchLine,
          IconTroubleLine,
          Link,
          RadioInput,
          RadioInputGroup
        } from '@instructure/ui'

// Components
import Redirects from 'components/redirects'

// Variables
const globalBrands = ["Instructure", "Canvas", "Mastery", "Elevate", "Impact"]

// Page
export default function Links() {

  const fromPrefix = 'inst.bid'

  const [query, setQuery] = useState({
    search: ""
  })

  const [lang, setLang] = useState({
    code: "EN"
  })

  const [links, setLinks] = useState({
    list: Redirects
  })

  const handleQueryChange = (e, v) => {
    setQuery({
      search: v
    })
    handleChange(lang.code, v)
  }

  const handleLangChange = function (e, v) {
    setLang({
      code: v
    })
    handleChange(v, query.search)
  }

  const handleQueryClear = (e) => {
    e.stopPropagation()
    handleQueryChange(e, "")
  }

  const handleChange = (l, q) => {
      const filteredLinks = Redirects.map(brands => ({
      ...brands,
      links: brands.links
       .filter(link => `${brands.brand + " " + link.title}`.toLowerCase().includes(q.toLowerCase()))
       .filter(link => link.lang.includes(l))
    }))
    .filter(brands => brands.links.length > 0)

    setLinks({
      list: filteredLinks
    })
  }

  const renderClearButton = (e) => {
    if (query.search.length) {
      return (
        <IconButton
            type="button"
            size="small"
            withBackground={false}
            withBorder={false}
            screenReaderLabel="Clear filter"
            onClick={handleQueryClear}>
          <IconTroubleLine />
        </IconButton>
      )
    }
  }

  return (
    <View
      id="main"
      as="div"
      padding="medium medium xx-large"
      minWidth="20rem"
      maxWidth="59.25rem"
      margin="0 auto" 
    >
      <View as="div" margin="none none x-large">
        <Heading level="h1">Redirect Links</Heading>
        <Text>
          This page provides a collection of shortened URLs for use in RFP responses. 
          Each row has a short URL and the original URL. 
          Click on the copy icon <IconCopyLine title="Copy Icon" /> and the short URL will be added to your clipboard.
        </Text>
        <View
          as="div"
          margin="large none none"
        >
          <form
            name="searchFilters"
            autoComplete="off"
          >
            <TextInput
              type="search"
              renderLabel="Filter"
              placeholder="community"
              onChange={handleQueryChange}
              renderBeforeInput={<IconSearchLine inline={false} />}
              renderAfterInput={renderClearButton}
              value={query.search}
            />
            <br/>
            <RadioInputGroup
              name="language"
              description="Language"
              defaultValue="EN"
              layout="columns"
              variant="toggle"
              onChange={handleLangChange}
            >
              <RadioInput label="English" value="EN" context="off" />
              <RadioInput label="Español" value="ES_LA" context="off" />
              <RadioInput label="Português" value="PT_BR" context="off" />
            </RadioInputGroup>
          </form>
        </View>
      </View>
      {
       (links.list).map( brands => {
          if (brands.links.length) {
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
                        Link
                      </Table.ColHeader>
                    </Table.Row>
                  </Table.Head>
                  <Table.Body>
                    {
                      (brands.links).map( link => {
                        return(
                          <Table.Row key={link.title}>
                            <Table.Cell>
                              <Text>{link.title}</Text>
                            </Table.Cell>
                            <Table.Cell>
                              <Link href={ `https://${fromPrefix}${link.from}` }>{ `${fromPrefix}${link.from}` }</Link>&nbsp;&nbsp;
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
          } else {
            return( null )
          }
       })
      }
    </View>
  )
}
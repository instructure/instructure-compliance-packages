// Modules
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
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
          RadioInputGroup,
          ToggleDetails,
          Button
        } from '@instructure/ui'

// Components
import { globalBrands, globalSubBrands } from 'variables/brands'
import Redirects from 'variables/redirects'

// Page
export default function Links() {

  const fromPrefix = 'inst.bid'

  const [query, setQuery] = useState({
    search: ""
  })

  const [lang, setLang] = useState({
    code: "EN"
  })

  const [brands, setBrands] = useState({
    list: globalSubBrands
  })

  const [links, setLinks] = useState({
    list: Redirects
  })

  const [toggle, setExpanded] = useState({
    expanded: false,
    text:     "Show"
  })

  const handleQueryChange = (e, v) => {
    setQuery({
      search: v
    })
    handleChange(lang.code, v, brands.list)
  }

  const handleLangChange = (e, v) => {
    setLang({
      code: v
    })
    handleChange(v, query.search, brands.list)
  }

  const handleBrandChange =  (e, v) => {
    var arr = []
    if (v === "All") {
      arr = globalSubBrands
    } else {
      arr = globalSubBrands.filter(brand => 
        brand.toLowerCase().includes(v.toLowerCase())
      )
    }
    setBrands({
      list: arr
    })
    handleChange(lang.code, query.search, arr)
  }

  const handleChange = (l, q, b) => {
      const filteredLinks = Redirects.map(brands => ({
      ...brands,
      links: brands.links
       .filter(link => `${brands.brand + " " + link.title}`.toLowerCase().includes(q.toLowerCase()))
       .filter(link => link.lang.includes(l))
       
    }))
    .filter(brands => brands.links.length > 0)
    .filter(brands => b.includes(brands.brand))

    setLinks({
      list: filteredLinks
    })
  }

  const handleToggleChange = () => {
    let t = (toggle.expanded) ? "Show" : "Hide"
    setExpanded({
      expanded: !toggle.expanded,
      text: t
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
            screenReaderLabel="Clear search"
            onClick={handleQueryClear}>
          <IconTroubleLine />
        </IconButton>
      )
    }
  }

  const handleQueryClear = (e) => {
    e.stopPropagation()
    handleQueryChange(e, "")
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
        <br/>
        <br/>
        <Button onClick={handleToggleChange}>
          {toggle.text  + " Filters"}
        </Button>
        <ToggleDetails
          id="toggleFilters"
          summary="Filters"
          onToggle={handleToggleChange}
          expanded={toggle.expanded}
        >
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
              renderLabel="Search"
              placeholder="community"
              onChange={handleQueryChange}
              renderBeforeInput={<IconSearchLine inline={false} />}
              renderAfterInput={renderClearButton}
              value={query.search}
            />
            <br/>
            <RadioInputGroup
              name="brand"
              description="Brands"
              defaultValue="All"
              layout="columns"
              variant="toggle"
              onChange={handleBrandChange}
            >
              <RadioInput
                key="All"
                value="All"
                label="All"
                context="off"
              />

              {globalBrands.map( brand => 
                <RadioInput
                  key={brand}
                  value={brand}
                  label={brand}
                  context="off"
                />
              )}

            </RadioInputGroup>
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
        </ToggleDetails>
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
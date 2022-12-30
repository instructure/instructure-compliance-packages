// Modules
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { View, Link, Text, List, Heading } from '@instructure/ui'

// Page
function Markdown(props) {
  let md = props.readme

  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(md)
      .then((response) => {
        if (response.ok) return response.text()
        else return Promise.reject("Didn't fetch text correctly")
      })
      .then((text) => {
        setContent(text)
      })
      .catch((error) => console.error(error))
  })

  const filterChildren = (props) => {
    const filteredChildren = props.children.filter(
      (child) => typeof child !== "string",
    )
    return filteredChildren
  }

  return ( 
    <View as="div">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          a:          ({node, ...props}) => <Link to={node.href} {...props} />,
          p:          ({node, ...props}) => <Text as={node.tagName} {...props} />,
          span:       ({node, ...props}) => <Text as={node.tagName} {...props} />,
          blockquote: ({node, ...props}) => <Text as={node.tagName} {...props} />,
          code:       ({node, ...props}) => <Text as={node.tagName} {...props} />,
          del:        ({node, ...props}) => <Text as={node.tagName} {...props} />,
          h1:         ({node, ...props}) => {
                                              props.level = node.tagName
                                              return <Heading margin="none none medium" {...props} />
                                            },
          h2:         ({node, ...props}) => {
                                              props.level = node.tagName;
                                              return <Heading margin="small none small" {...props} />
                                            },
          h3:         ({node, ...props}) => {
                                              props.level = node.tagName
                                              return <Heading {...props} />
                                            },
          h4:         ({node, ...props}) => {
                                              props.level = node.tagName
                                              return <Heading {...props} />
                                            },
          h5:         ({node, ...props}) => {
                                              props.level = node.tagName
                                              return <Heading {...props} />
                                            },

          div:        ({node, ...props}) => <View as={node.tagName} {...props} />,
          pre:        ({node, ...props}) => <View as={node.tagName} {...props} />,

          ul:         ({node, ...props}) => {
                                              const fProps = { ...props, children: filterChildren(props) }
                                              return <List as={node.tagName} {...fProps} />
                                            },
          ol:         ({node, ...props}) => {
                                              const fProps = { ...props, children: filterChildren(props) }
                                              return <List as={node.tagName} {...fProps} />
                                            },
          li:         ({node, ...props}) => <List.Item {...props} />
        }}
      />
    </View>
  )
}

export default Markdown

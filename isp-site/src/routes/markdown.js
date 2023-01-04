// Modules
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import rehypeRaw from 'rehype-raw'
import { View, Link, Text, List, Heading, SourceCodeEditor, Byline, Avatar } from '@instructure/ui'

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

  const filterChildrenProps = (props) => {
    const filteredChildren = props.children.filter(
      (child) => typeof child !== "string",
    )
    return filteredChildren
  }
  const filterChildrenNode = (node) => {
    const filteredChildren = node.children.filter(
      (child) => child.type !== "text"
    )
    return filteredChildren
  }

  const allowedEls = [
    'a', 'p', 'span', 'code', 'del', 'blockquote',
    'h1', 'h2', 'h3', 'h4', 'h5', 'img',
    'ul', 'li', 'div', 'pre', 'ul', 'ol', 'li', 'input',
    'details', 'summary', 'br', 'em', 'strong', 'hr',
    'table', 'tbody', 'thead', 'td', 'th', 'tr'
  ]

  return ( 
    <View as="div">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm, remarkGemoji]}
        rehypePlugins={[rehypeRaw]}
        allowedElements={allowedEls}
        components={{
          a:          ({node, ...props}) => <Link to={node.href} {...props} />,
          p:          ({node, ...props}) => <Text as={node.tagName} {...props} />,
          span:       ({node, ...props}) => <Text as={node.tagName} {...props} />,
          code:       ({node, ...props}) => <Text as={node.tagName} {...props} />,
          del:        ({node, ...props}) => <Text as={node.tagName} {...props} />,
          blockquote: ({node, ...props}) => { 
                                              node = {...node, children: filterChildrenNode(node)}
                                              props = { ...props, children: filterChildrenProps(props) }
                                              const quoteArr = props.children[0].props.children[0].split("--", 2)
                                              const quote = quoteArr[0]
                                              const author = (quoteArr.length > 1) ? quoteArr[1] : null
                                              return(
                                                  <Byline description={quote}  title={author} margin="medium 0" {...props}  >
                                                    { author ? <Avatar name={author} /> : null}
                                                  </Byline>
                                              )
                                            },
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
          pre:        ({node, ...props}) => {
                                              if (node.children.length === 1 && node.children[0].tagName === 'code') {
                                                let content = node.children[0].children[0].value
                                                if (content.endsWith("\n")) {
                                                  content = content.slice(0, -1)
                                                }
                                                return (
                                                  <SourceCodeEditor
                                                    label='editable code editor'
                                                    lineNumbers={true}
                                                    foldGutter={true}
                                                    editable={true}
                                                    readOnly={true}
                                                    defaultValue={content}
                                                  />
                                                )
                                              } else {
                                                return <View as={node.tagName} {...props} />
                                              }
                                            },

          ul:         ({node, ...props}) => {
                                              node = {...node, children: filterChildrenNode(node)}
                                              props = { ...props, children: filterChildrenProps(props) }
                                              return <List isUnstyled={(props.className === "contains-task-list") ? true : false} {...props} />
                                            },
          ol:         ({node, ...props}) => {
                                              node = {...node, children: filterChildrenNode(node)}
                                              props = { ...props, children: filterChildrenProps(props) }
                                              return <List as={node.tagName}  {...props} />
                                            },
          li:         ({node, ...props}) => {
                                              return(
                                                <List.Item {...props} />
                                              )
                                            },

          input:      ({node, ...props}) => {
                                              switch(props.type) {
                                                default:
                                                  return <node.tagName {...props} />
                                              }
                                            }
        }}
      />
    </View>
  )
}

export default Markdown

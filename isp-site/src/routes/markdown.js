// Modules
import { useState, useEffect } from 'react'
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
        setContent(text);
      })
      .catch((error) => console.error(error));
  })
  

  { /* TODO: Items with children don't don't apply their component renders */ }

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

          h1:         ({node, ...props}) => { delete props.level; return( <Heading level={node.tagName} margin="none none medium" {...props} /> ) },
          h2:         ({node, ...props}) => { delete props.level; return( <Heading level={node.tagName} margin="small none small" {...props} /> ) },
          h3:         ({node, ...props}) => { delete props.level; return( <Heading level={node.tagName} {...props} /> ) },
          h4:         ({node, ...props}) => { delete props.level; return( <Heading level={node.tagName} {...props} /> ) },
          h5:         ({node, ...props}) => { delete props.level; return( <Heading level={node.tagName} {...props} /> ) },

          div:        ({node, ...props}) => <View as="div" {...props} />,
          pre:        ({node, ...props}) => <View as={node.tagName} {...props} />,
          li:         ({node, ...props}) => <List.Item {...props} />
        }}
      />
    </View>
  )
}

export default Markdown

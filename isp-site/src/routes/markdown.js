// Modules
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import rehypeRaw from 'rehype-raw'
import { View, Link, Text, List, Heading, SourceCodeEditor, Byline, Avatar, ToggleGroup, Img, Table, Checkbox } from '@instructure/ui'

// Components
import allowedElements from 'components/allowedElements'
import mdtoui from 'components/mdtoui'

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

  return ( 
    <View as="div">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm, remarkGemoji]}
        rehypePlugins={[rehypeRaw]}
        allowedElements={allowedElements}
        components={mdtoui}
      />
    </View>
  )
}

export default Markdown

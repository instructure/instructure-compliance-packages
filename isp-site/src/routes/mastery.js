// Modules
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { View } from '@instructure/ui'

// Variables
const gh_readme = 'https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README-Mastery.md'

// Page
function Root() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(gh_readme)
      .then((response) => {
        if (response.ok) return response.text()
        else return Promise.reject("Didn't fetch text correctly")
      })
      .then((text) => {
        setContent(text);
      })
      .catch((error) => console.error(error));
  })
  
  return (
    <View as="div">
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </View>
  )
}

export default Root

// Modules
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { View, Text, Heading } from '@instructure/ui'

// Variables
const gh_readme = 'https://raw.githubusercontent.com/thedannywahl/instructure-security-package/main/README.md'
let content = "Loading..."

// Page
export default function Root() {
  const [content, setMdText] = useState('');

  useEffect(() => {
      fetch(gh_readme)
          .then((response) => {
              if (response.ok) return response.text()
              else return Promise.reject("Didn't fetch text correctly");
          })
          .then((text) => {
              setMdText(text);
          })
          .catch((error) => console.error(error));
  })
  
  return (
  <View as="div">
      <Heading>Home</Heading>
    <Text>Welcome to the Instructure security packages, choose your product.</Text>
    <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
  </View>
  )
}
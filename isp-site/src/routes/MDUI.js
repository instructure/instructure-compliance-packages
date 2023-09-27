// Modules
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import rehypeRaw from 'rehype-raw'
import { View, Link, Text, List, Heading, SourceCodeEditor, Byline, Avatar, ToggleGroup, Img, Table, Checkbox, Grid } from '@instructure/ui'

// Components
import allowedElements from 'variables/allowedElements'
import markdownSample from 'variables/markdownSample.md'
import mdtoui from 'components/mdtoui'

// Page
export default function MDUI() {
  let md = markdownSample

  const [content, setContent] = useState('Loading...')

  useEffect((md) => {
    fetch(md)
      .then((response) => {
        if (response.ok) return response.text()
        else return Promise.reject("Didn't fetch text correctly")
      })
      .then((text) => {
        setContent(text)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
		<View
			id="main"
			as="div"
			padding="medium medium xx-large"
			minWidth="20rem"
			maxWidth="100vw"
			margin="0 auto" 
		>
			<Grid startAt="large">
				<Grid.Row>
					<Grid.Col>
						<ReactMarkdown
							children={content}
							remarkPlugins={[remarkGfm, remarkGemoji]}
							rehypePlugins={[rehypeRaw]}
							allowedElements={allowedElements}
							components={mdtoui}
						/>
					</Grid.Col>
					<Grid.Col>
						<SourceCodeEditor
							label='Markdown Source'
							language="markdown"
							readOnly={true}
							editable={true}
							lineNumbers={true}
							foldGutter={true}
							highlightActiveLineGutter={true}
							highlightActiveLine={true}
							lineWrapping={true}
							value={content}
							onChange={(value) => {
								this.setState({ value })
							}}
						/>
					</Grid.Col>
				</Grid.Row>
			</Grid>
		</View>
	)
}
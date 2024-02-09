// Modules
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import rehypeRaw from "rehype-raw";
import {
	View,
	Link,
	Text,
	List,
	Heading,
	SourceCodeEditor,
	Byline,
	Avatar,
	ToggleDetails,
	Img,
	Table,
	Checkbox,
	Grid,
} from "@instructure/ui";
import { useParams } from "react-router-dom";
import { getStrings, getLang } from "variables/langs";
import { strings } from "strings/mdui";

// Components
import RenderTopNavBar from "components/RenderTopNavBar";
import RenderFooter from "components/RenderFooter";
import allowedElements from "variables/allowedElements";
import markdownSample from "variables/markdownSample.md";
import mdtoui from "components/mdtoui";

// Page
export default function MDUI() {
	const l = getLang(useParams().language);
	const s = getStrings(strings, l);
	const md = markdownSample;

	const [content, setContent] = useState(s.loading);

	useEffect(() => {
		fetch(md)
			.then((response) => {
				if (response.ok) return response.text();
				return Promise.reject(s.fetch_fail);
			})
			.then((text) => {
				setContent(text);
			})
			.catch((error) => console.error(error));
	}, [md, s.fetch_fail]);

	return (
		<>
			<RenderTopNavBar lang={l} />
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
								label="Markdown Source"
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
									this.setState({ value });
								}}
							/>
						</Grid.Col>
					</Grid.Row>
				</Grid>
			</View>
			<RenderFooter lang={l} />
		</>
	);
}

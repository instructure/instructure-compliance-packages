// Modules
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import rehypeRaw from "rehype-raw";
import { View, SourceCodeEditor, Grid, Alert } from "@instructure/ui";
import { useParams } from "react-router-dom";
import { getStrings, getLang } from "utils/langs";
import strings from "strings/mdui";

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
	let init = true;

	useEffect(() => {
		document.title = "Markdown to Instructure UI";
	});

	const [content, setContent] = useState(`${s.loading}`);

	useEffect(
		(text) => {
			if (init) {
				init = false;
				const getMD = async () => {
					await fetch(md)
						.then((response) => {
							if (response.ok) return response.text();
							return Promise.reject(s.fetch_fail);
						})
						.then((text) => {
							setContent(text);
						})
						.catch((error) => console.error(error));
				};
				getMD();
				return;
			}
			setContent(text);
		},
		[md, init, s.fetch_fail],
	);

	return (
		<>
			<RenderTopNavBar language={l} />
			<View
				id="main"
				className="mdui"
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
							<Alert
								variant="info"
								renderCloseButtonLabel={`${s.close}`}
								margin="none none medium"
							>
								{s.try_editor}
							</Alert>
							<SourceCodeEditor
								label={`${s.markdown_source}`}
								language="markdown"
								readOnly={false}
								editable={true}
								lineNumbers={true}
								foldGutter={true}
								highlightActiveLineGutter={true}
								highlightActiveLine={true}
								lineWrapping={true}
								value={content}
								onChange={(value) => {
									setContent(value);
								}}
							/>
						</Grid.Col>
					</Grid.Row>
				</Grid>
			</View>
			<RenderFooter language={l} />
		</>
	);
}

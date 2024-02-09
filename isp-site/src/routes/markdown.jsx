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
	ToggleGroup,
	Img,
	Table,
	Checkbox,
} from "@instructure/ui";
import RenderTopNavBar from "components/RenderTopNavBar";
import RenderFooter from "components/RenderFooter";

// Components
import allowedElements from "variables/allowedElements";
import mdtoui from "components/mdtoui";
import { useParams } from "react-router-dom";
import { getLang } from "variables/langs";

// Page
export default function Markdown({ readme }) {
	const l = getLang(useParams().language);
	const css = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;
	const md = readme;

	const [content, setContent] = useState("");

	useEffect(() => {
		fetch(md)
			.then((response) => {
				if (response.ok) return response.text();
				return Promise.reject("Didn't fetch text correctly");
			})
			.then((text) => {
				setContent(text);
			})
			.catch((error) => console.error(error));
	});

	return (
		<>
			<RenderTopNavBar lang={l} />
			<View
				id="main"
				as="div"
				padding="medium medium xx-large"
				minWidth="20rem"
				maxWidth="59.25rem"
				margin="0 auto"
			>
				<style>{css}</style>
				<div className="markdown">
					<ReactMarkdown
						children={content}
						remarkPlugins={[remarkGfm, remarkGemoji]}
						rehypePlugins={[rehypeRaw]}
						allowedElements={allowedElements}
						components={mdtoui}
					/>
				</div>
			</View>
			<RenderFooter lang={l} />
		</>
	);
}

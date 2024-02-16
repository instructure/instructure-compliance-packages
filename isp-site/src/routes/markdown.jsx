// Modules
import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";
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
	IconCloudDownloadLine,
} from "@instructure/ui";
import RenderTopNavBar from "components/RenderTopNavBar";
import RenderFooter from "components/RenderFooter";

// Components
import allowedElements from "variables/allowedElements";
import mdtoui from "components/mdtoui";
import { useParams } from "react-router-dom";
import strings from "strings/markdown";
import { getStrings, getLang } from "utils/langs";
import { Explorer } from "utils/explorer";

// Page
export default function Markdown({ readme }) {
	const l = getLang(useParams().language);
	const s = getStrings(strings, l);
	const css = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;
	const md = readme;

	const [content, setContent] = useState(`${s.loading}`);

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
	});

	useEffect(() => {
		const page = document.getElementsByTagName("body")[0].classList[0];
		const branches = document.querySelectorAll(".markdown .contents");

		for (const branch of branches) {
			Explorer(page, branch, l).then((table) => {
				reactDOM.render(
					<ReactMarkdown
						children={table}
						remarkPlugins={[remarkGfm, remarkGemoji]}
						rehypePlugins={[rehypeRaw]}
						allowedElements={allowedElements}
						components={mdtoui}
					/>,
					branch,
				);
			});
		}
	});

	return (
		<>
			<RenderTopNavBar language={l} />
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
			<RenderFooter language={l} />
		</>
	);
}

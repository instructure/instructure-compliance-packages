import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import rehypeRaw from "rehype-raw";
import { View } from "@instructure/ui";
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
export default function MarkdownBrand({ readme, brand }) {
	const l = getLang(useParams().language);
	const s = getStrings(strings, l);
	const css = `.markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;
	const md = readme;
	const [content, setContent] = useState(`${s.loading}`);

	useEffect(() => {
		document.title = `${brand} Compliance Packages`;
	});

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
		const branches = document.querySelectorAll(".markdown .contents");
		if (branches.length > 0) {
			for (const branch of branches) {
				Explorer(brand.toLowerCase(), branch, l).then((table) => {
					ReactDOM.createRoot(branch).render(
						<Markdown
							children={table}
							remarkPlugins={[remarkGfm, remarkGemoji]}
							rehypePlugins={[rehypeRaw]}
							allowedElements={allowedElements}
							components={mdtoui}
						/>,
					);
				});
			}
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

				<View as="div" className="markdown">
					<Markdown
						children={content}
						remarkPlugins={[remarkGfm, remarkGemoji]}
						rehypePlugins={[rehypeRaw]}
						allowedElements={allowedElements}
						components={mdtoui}
					/>
				</View>
			</View>
			<RenderFooter language={l} />
		</>
	);
}

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import rehypeRaw from "rehype-raw";
import global from "variables/globals";
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
import { IconRssLine } from "@instructure/ui-icons";
import allowedElements from "variables/allowedElements";
import mdtoui from "components/mdtoui";
import { useParams } from "react-router-dom";
import strings from "strings/releases";
import { getStrings, getLang } from "utils/langs";
import RenderFooter from "components/RenderFooter";
import RenderTopNavBar from "components/RenderTopNavBar";
import { printReleases } from "utils/releases";

export default function Releases() {
	const l = getLang(useParams().language);
	const s = getStrings(strings, l);

	const atom = `https://github.com/${global.owner}/${global.repo}/releases.atom`;

	const css = `hr {border: 1px solid currentColor;} .markdown .lang { display: none; } .markdown .lang.${l.toUpperCase()} { display: inherit; }`;

	const [content, setContent] = useState(`${s.loading}`);
	useEffect(() => {
		printReleases()
			.then((text) => {
				setContent(text);
			})
			.catch((error) => console.error(error));
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
				<Heading level="h1">
					<Link href={atom}>
						<IconRssLine size="small" color="warning" title={s.subscribe} />
					</Link>{" "}
					{s.releases}
				</Heading>
				<style>{css}</style>
				<View as="div" className="markdown">
					<ReactMarkdown
						children={content}
						remarkPlugins={[remarkGfm, remarkGemoji]}
						rehypePlugins={[rehypeRaw]}
						allowedElements={allowedElements}
						components={mdtoui}
					/>
				</View>
			</View>
			<RenderFooter language={l} />,
		</>
	);
}

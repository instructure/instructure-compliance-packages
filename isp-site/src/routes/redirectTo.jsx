// Modules
import { Text, View, Link, Billboard } from "@instructure/ui";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStrings, getLang } from "utils/langs";
import strings from "strings/redirectTo";
import RenderFooter from "components/RenderFooter";
import RenderTopNavBar from "components/RenderTopNavBar";

// Page
export default function RedirectTo({ path, brand, url }) {
	const l = getLang(useParams().language);
	const s = getStrings(strings, l);
	const urlRoot = url.split("?")[0];
	const filetype = url.slice(-4);
	const download = path.slice(-3) === "/dl";

	useEffect(() => {
		window.location.href = url;
	});

	const billboardText = () => {
		if (download) {
			return (
				<View as="div">
					<Text>
						{filetype === ".zip"
							? `${s.youre_downloading_the} ${brand} ${s.compliance_package}`
							: `${s.youre_downloading_a} ${brand} ${s.compliance_package}`}
					</Text>
					<br />
					<Text size="x-small">
						{s.didnt_work} <Link href={url}>{s.try_again}</Link>
					</Text>
				</View>
			);
		}
		return (
			<View as="div">
				<Text>
					{s.redirecting_to} <Link href={url}>{urlRoot}</Link>
				</Text>
			</View>
		);
	};

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
				<Billboard
					size="medium"
					heading={download ? s.downloading : s.redirecting}
					headingAs="h1"
					message={billboardText}
				/>
			</View>
			<RenderFooter language={l} />
		</>
	);
}

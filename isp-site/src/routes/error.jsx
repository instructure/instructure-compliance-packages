// Modules
import { useParams, useRouteError } from "react-router-dom";
import { View, Billboard, Text, Link } from "@instructure/ui";
import { strings } from "strings/error";
import { getLang, getStrings } from "variables/langs";
import RenderTopNavBar from "components/RenderTopNavBar";
import RenderFooter from "components/RenderFooter";

// Page
export default function ErrorPage() {
	const l = getLang(useParams().language);
	const s = getStrings(strings, l);
	const err = useRouteError();
	console.error(err);
	let msg = s.not_your_fault;
	if(err) {
		msg = `
			${err.status ? `${err.status} ${err.statusText}<br/>` : ""}
			${err.message ? err.message : s.not_your_fault}
		`
	}
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
				<Billboard
					size="medium"
					heading={s.awkward}
					headingAs="h1"
					message={
						<>
							<Text as="p">
								<i>{msg}</i>
							</Text>
							<Text as="p">
								{s.uhm} <Link href="./#/">{s.class_dismissed}</Link>.
							</Text>
						</>
					}
				/>
			</View>
			<RenderFooter lang={l} />
		</>
	);
}

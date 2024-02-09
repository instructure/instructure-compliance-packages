// Modules
import { useRouteError } from "react-router-dom";
import { View, Billboard, Text, Link } from "@instructure/ui";

// Page
export default function ErrorPage() {
	const err = useRouteError();
	console.error(err);
	return (
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
					heading="Well, this is awkward."
					headingAs="h1"
					message={
						<>
							<Text as="p">
								<i>{`${err.status} ${err.statusText}`}</i>
								<br/>
								<i>{err.message}</i>
							</Text>
							<Text as="p">
								Uhm... <Link href="./#/">class dismissed</Link>.
							</Text>
						</>
					}
				/>
			</View>
	);
}

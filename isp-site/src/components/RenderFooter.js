// Modules
import { View, Link, Text, IconHeartLine } from "@instructure/ui";

// Component
function RenderFooter() {
	return (
		<View
			id="footer"
			as="div"
			textAlign="center"
			padding="small"
			position="absolute"
			insetBlockEnd="0"
			margin="0 auto"
			width="100%"
			borderWidth="small none none"
		>
			<Text
				transform="uppercase"
				letterSpacing="expanded"
				color="primary-inverse"
				size="small"
			>
				Made with <IconHeartLine color="primary-inverse" title="Love" /> by{" "}
				<Link color="link-inverse" href="https://www.instructure.com">
					Instructure
				</Link>
			</Text>
		</View>
	);
}

export default RenderFooter;

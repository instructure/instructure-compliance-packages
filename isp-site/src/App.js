// Modules
import { HashRouter } from "react-router-dom";
import { InstUISettingsProvider, canvas, View } from "@instructure/ui";
import { getLang } from "variables/langs";

// Components
import RenderTopNavBar from "components/RenderTopNavBar";
import RenderFooter from "components/RenderFooter";
import "components/toggle";

// Styles
import "./App.css";

// Routes
import RootRoutes from "routes/rootRoutes";

// App
function App() {
	const lang = getLang(window.location.hash.split("/").pop());
	const css = `.markdown .lang { display: none; } .markdown .lang.${lang.toUpperCase()} { display: inherit; }`;

	return (
		<>
			<style>{css}</style>
			<InstUISettingsProvider theme={canvas}>
				<View as="div" minHeight="100vh" position="relative">
					<RenderTopNavBar l={lang} />
					<HashRouter future={{ v7_startTransition: true }}>
						<RootRoutes l={lang} />
					</HashRouter>
					<RenderFooter l={lang} />
				</View>
			</InstUISettingsProvider>
		</>
	);
}

export default App;

// Modules
import { HashRouter } from "react-router-dom"
import { InstUISettingsProvider, canvas, View } from '@instructure/ui'

// Components
import RenderTopNavBar from 'components/RenderTopNavBar'
import RenderFooter from "components/RenderFooter"
import 'components/toggle'

// Styles
import './App.css'

// Routes
import RootRoutes from "routes/rootRoutes"

// App
function App() { return (
  <InstUISettingsProvider theme={canvas}>
    <View
     as="div"
     minHeight="100vh"
     position="relative"
    >
      <RenderTopNavBar />
      <View
        id="main"
        as="div"
        padding="medium medium xx-large"
        minWidth="20rem"
        maxWidth="59.25rem"
        margin="0 auto"
      >
        <HashRouter>
            <RootRoutes />
        </HashRouter>
      </View>
      <RenderFooter />
    </View>
  </InstUISettingsProvider>
)}

export default App;

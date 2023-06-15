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
function App() { return(
  <InstUISettingsProvider theme={canvas}>
    <View
     as="div"
     minHeight="100vh"
     position="relative"
    >
    <RenderTopNavBar />
      <HashRouter future={{ v7_startTransition: true }}>
          <RootRoutes />
      </HashRouter>
      <RenderFooter />
    </View>
  </InstUISettingsProvider>
)}

export default App;

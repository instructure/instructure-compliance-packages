// Modules
import { HashRouter, Routes, Route } from "react-router-dom"
import { InstUISettingsProvider, instructure } from '@instructure/ui'

// Components
import RenderTopNavBar from 'components/RenderTopNavBar'
import 'components/toggle'

// Styles
import './App.css'

// Routes
import Root from './routes/root'
import Contact from './routes/contact'
import Privacy from './routes/privacy'
import CanvasRoutes from "./routes/canvasRoutes"
import MasteryRoutes from "./routes/masteryRoutes"
import ImpactRoutes from "./routes/impactRoutes"
import ElevateRoutes from "./routes/elevateRoutes"

function App() { return (
  <InstUISettingsProvider theme={instructure}>
    <RenderTopNavBar />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/canvas/*" element={ <CanvasRoutes />} />
        <Route path="/mastery/*" element={<MasteryRoutes />} />
        <Route path="/impact/*" element={<ImpactRoutes />} />
        <Route path="/elevate/*" element={<ElevateRoutes />} />
      </Routes>
    </HashRouter>
  </InstUISettingsProvider>
)}

export default App;

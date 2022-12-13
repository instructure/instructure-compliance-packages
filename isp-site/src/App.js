// Modules
import { HashRouter, Routes, Route } from "react-router-dom"
import { InstUISettingsProvider, instructure } from '@instructure/ui'

// Components
import RenderTopNavBar from 'components/RenderTopNavBar'
import 'components/toggle'

// Styles
import './App.css'

// Routes
import NotFound from 'routes/notFound'
import RedirectTo from 'routes/redirectTo'
import Root from 'routes/root'
import CanvasRoutes from "routes/canvasRoutes"
import MasteryRoutes from "routes/masteryRoutes"
import ImpactRoutes from "routes/impactRoutes"
import ElevateRoutes from "routes/elevateRoutes"

function App() { return (
  <InstUISettingsProvider theme={instructure}>
    <RenderTopNavBar />
    <HashRouter>
      <Routes>
        <Route path="*"           element={<NotFound />} />
        <Route path="/"           element={ <Root /> } />

        {/* Product Brands */}
        <Route path="/canvas/*"   element={ <CanvasRoutes /> } />
        <Route path="/mastery/*"  element={ <MasteryRoutes /> } />
        <Route path="/impact/*"   element={ <ImpactRoutes /> } />
        <Route path="/elevate/*"  element={ <ElevateRoutes /> } />

        {/* Company Redirects */}
        <Route path="/roadmap"    element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Instructure-Roadmap/ct-p/instructure-roadmap' } /> } />
        <Route path="/contact"    element={ <RedirectTo url={ 'https://www.instructure.com/contact-us' } /> } />
        <Route path="/privacy"    element={ <RedirectTo url={ 'https://www.instructure.com/canvas/privacy' } /> } />
        <Route path="/security"   element={ <RedirectTo url={ 'https://www.instructure.com/products/canvas/security' } /> } />
        <Route path="/a11y"       element={ <RedirectTo url={ 'https://www.instructure.com/accessibility' } /> } />
        <Route path="/community"  element={ <RedirectTo url={ 'https://community.canvaslms.com/' } /> } />
        <Route path="/tos"        element={ <RedirectTo url={ 'https://www.instructure.com/policies/master-terms-conditions' } /> } />
        <Route path="/tos/global" element={ <RedirectTo url={ 'https://www.instructure.com/policies/global/master-terms-and-conditions' } /> } />
        <Route path="/aup"        element={ <RedirectTo url={ 'https://www.instructure.com/policies/acceptable-use' } /> } />
        <Route path="/dpa"        element={ <RedirectTo url={ 'https://www.instructure.com/policies/data-processing' } /> } />
      </Routes>
    </HashRouter>
  </InstUISettingsProvider>
)}

export default App;

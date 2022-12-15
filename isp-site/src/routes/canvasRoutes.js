// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import NotFound from 'routes/notFound'
import RedirectTo from 'routes/redirectTo'
import Canvas from 'routes/canvas'

const CanvasRoutes = () => (
  <Routes>
    <Route path="*"                   element={ <NotFound /> } />
    <Route path="/"                   element={ <Canvas /> } />

    {/* Canvas Brand */ }
    <Route path="/community"          element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Canvas/ct-p/canvas' } /> } />
    <Route path="/roadmap"            element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Canvas-Product-Roadmap/ct-p/canvas-product-roadmap' } /> } />

    {/* Canvas LMS */}
    <Route path="/lms"                element={ <RedirectTo url={ 'https://www.instructure.com/higher-education/products/canvas/canvas-lms' } /> } />
    <Route path="/lms/dl"             element={ <RedirectTo url={ 'https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-lms.zip' } /> } />
    <Route path="/lms/k12"            element={ <RedirectTo url={ 'https://www.instructure.com/k12/products/canvas/canvas-lms' } /> } />
    <Route path="/lms/vpat"           element={ <RedirectTo url={ 'https://www.instructure.com/products/canvas/accessibility' } /> } />
    <Route path="/lms/guides"         element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Canvas-Guides/ct-p/canvas_guides' } /> } />

    {/* Canvas Studio */}
    <Route path="/studio"             element={ <RedirectTo url={ 'https://www.instructure.com/higher-education/products/canvas/canvas-studio' } /> } />
    <Route path="/studio/dl"          element={ <RedirectTo url={ 'https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-studio.zip' } /> } />
    <Route path="/studio/k12"         element={ <RedirectTo url={ 'https://www.instructure.com/k12/products/canvas/canvas-studio' } /> } />
    <Route path="/studio/vpat"        element={ <RedirectTo url={ 'https://www.instructure.com/accessibility/canvas/canvas-studio-vpat' } /> } />
    <Route path="/studio/guides"      element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Canvas-Studio/ct-p/studio_guides' } /> } />

    {/* Canvas Catalog */}
    <Route path="/catalog"            element={ <RedirectTo url={ 'https://www.instructure.com/higher-education/products/canvas/canvas-catalog' } /> } />
    <Route path="/catalog/dl"          element={ <RedirectTo url={ 'https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-catalog.zip' } /> } />
    <Route path="/catalog/k12"        element={ <RedirectTo url={ 'https://www.instructure.com/k12/products/canvas/canvas-catalog' } /> } />
    <Route path="/catalog/guides"     element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Canvas-Catalog/ct-p/canvas_catalog' } /> } />

    {/* Canvas Credentials */}
    <Route path="/credentials"        element={ <RedirectTo url={ 'https://www.instructure.com/higher-education/products/canvas/canvas-credentials-digital-badges' } /> } />
    <Route path="/credentials/dl"     element={ <RedirectTo url={ 'https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-credentials.zip' } /> } />
    <Route path="/credentials/k12"    element={ <RedirectTo url={ 'https://www.instructure.com/k12/products/canvas/canvas-credentials-digital-badges' } /> } />
    <Route path="/credentials/guides" element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Canvas-Credentials-Badges-Badgr/ct-p/canvas-credentials-badges' } /> } />
  </Routes>
)

export default CanvasRoutes
// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import NotFound from 'routes/notFound'
import RedirectTo from 'routes/redirectTo'
import Canvas from 'routes/canvas'

const CanvasRoutes = () => (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={ <Canvas /> } />

      {/* Canvas Brand */ }
      <Route path="/community" element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Canvas/ct-p/canvas' } /> } />

      {/* Canvas LMS */}
      <Route path="/lms" element={ <RedirectTo url={ 'https://www.instructure.com/higher-education/products/canvas/canvas-lms' } /> } />
      <Route path="/lms/k12" element={ <RedirectTo url={ 'https://www.instructure.com/k12/products/canvas/canvas-lms' } /> } />
      <Route path="/lms/vpat" element={ <RedirectTo url={ 'https://www.instructure.com/products/canvas/accessibility' } /> } />
    </Routes>
  )

export default CanvasRoutes
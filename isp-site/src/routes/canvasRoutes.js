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
      <Route path="/lms/vpat" element={ <RedirectTo url={ 'https://www.instructure.com/products/canvas/accessibility' } /> } />
      <Route path="/community" element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Canvas/ct-p/canvas' } /> } />
    </Routes>
  )

export default CanvasRoutes
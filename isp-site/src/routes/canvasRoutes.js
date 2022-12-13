// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import Accessibility from './canvas-a11y'
import Canvas from './canvas'
import Contact from './contact'

const CanvasRoutes = () => (
    <Routes>
      <Route path="/" element={ <Canvas /> } />
      <Route path="a11y" element={ <Accessibility /> } />
    </Routes>
  )

export default CanvasRoutes
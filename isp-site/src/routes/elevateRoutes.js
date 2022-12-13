// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import Elevate from './elevate'

const ElevateRoutes = () => (
    <Routes>
      <Route path="/" element={ <Elevate /> } />
    </Routes>
  )
  
export default ElevateRoutes
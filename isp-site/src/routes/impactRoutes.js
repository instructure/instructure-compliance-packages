// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import Impact from './impact'

const ImpactRoutes = () => (
    <Routes>
      <Route path="/" element={ <Impact /> } />
    </Routes>
  )

export default ImpactRoutes
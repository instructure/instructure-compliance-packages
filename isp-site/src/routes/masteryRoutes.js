// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import Mastery from './mastery'

const MasteryRoutes = () => (
    <Routes>
      <Route path="/" element={ <Mastery /> } />
    </Routes>
  )

export default MasteryRoutes
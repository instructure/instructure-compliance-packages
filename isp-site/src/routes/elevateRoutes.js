// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import NotFound from 'routes/notFound'
import RedirectTo from 'routes/redirectTo'
import Elevate from 'routes/elevate'

const ElevateRoutes = () => (
    <Routes>
      <Route path="*" element={ <NotFound /> } />
      <Route path="/" element={ <Elevate /> } />
      <Route path="/community" element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Elevate/ct-p/elevate' } /> } />
    </Routes>
  )
  
export default ElevateRoutes
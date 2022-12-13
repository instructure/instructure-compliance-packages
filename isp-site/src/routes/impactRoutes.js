// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import NotFound from 'routes/notFound'
import RedirectTo from 'routes/redirectTo'
import Impact from 'routes/impact'

const ImpactRoutes = () => (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={ <Impact /> } />
      <Route path="/community" element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Impact/ct-p/impact' } /> } />
    </Routes>
  )

export default ImpactRoutes
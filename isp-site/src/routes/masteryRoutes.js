// Modules
import { Routes, Route } from 'react-router-dom'

// Routes
import NotFound from 'routes/notFound'
import RedirectTo from 'routes/redirectTo'
import Mastery from 'routes/mastery'

// Page
const MasteryRoutes = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={ <Mastery /> } />
    <Route path="/community" element={ <RedirectTo url={ 'https://community.canvaslms.com/t5/Mastery/ct-p/mastery' } /> } />
  </Routes>
)

export default MasteryRoutes
// Modules
import { Routes, Route } from 'react-router-dom'

//Components
import Redirects from 'components/redirects'

// Routes
import NotFound from "routes/notFound"
import RedirectTo from "routes/redirectTo"
import Root from "routes/root"
import Links from "routes/links"
import Canvas from "routes/canvas"
import Mastery from "routes/mastery"
import Elevate from "routes/elevate"
import Impact from "routes/impact"

// Page
const RootRoutes = () => (
  <Routes>
    <Route path="*"         element={ <NotFound /> } />
    <Route path="/"         element={ <Root /> } />
    <Route path="/links"    element={ <Links /> } />

    <Route path="/canvas"   element={ <Canvas /> } />
    <Route path="/mastery"  element={ <Mastery /> } />
    <Route path="/elevate"  element={ <Elevate /> } />
    <Route path="/impact"   element={ <Impact /> } />

    {
      (Redirects).map( brand => { return(
        (brand.links).map( path => {
          if(path.from !== null && path.to !== null) { return(
            <Route path={path.from} element={ <RedirectTo path={path.from} brand={brand.brand} url={path.to} /> } />
          )} else {
            return( null )
          }
        })
      )})
    }      
  </Routes>
)

export default RootRoutes

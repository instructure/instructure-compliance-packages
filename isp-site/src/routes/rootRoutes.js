// Modules
import { Routes, Route } from 'react-router-dom'

//Components
import Links from 'components/links'

// Routes
import NotFound from "routes/notFound"
import RedirectTo from "routes/redirectTo"
import Root from "routes/root"
import LinksTable from "routes/linksTable"
import Canvas from "routes/canvas"
import Mastery from "routes/mastery"
import Elevate from "routes/elevate"
import Impact from "routes/impact"

// Page
const RootRoutes = () => (
  <Routes>
    <Route path="*"           element={<NotFound />} />
    <Route path="/"           element={ <Root /> } />
    <Route path="/links"      element={ <LinksTable /> } />

    <Route path="/canvas"     element={ <Canvas /> } />
    <Route path="/mastery"    element={ <Mastery /> } />
    <Route path="/elevate"    element={ <Elevate /> } />
    <Route path="/impact"     element={ <Impact /> } />

    {
      (Links).map( brand => {
        return(
          (brand.links).map( path => {
            if(path.from !== null && path.to !== null) {
              return(
                <Route
                  path={ path.from }
                  element={ <RedirectTo brand={brand.brand} url={path.to} /> }
                />
              )
            }
          })
        )
      })
    }      
  </Routes>
)

export default RootRoutes


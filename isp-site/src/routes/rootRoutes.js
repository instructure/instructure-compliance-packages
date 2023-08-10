// Modules
import { Routes, Route } from 'react-router-dom'

//Components
import { ParentBrands } from 'variables/brands'
import Redirects from 'variables/redirects'

// Routes
import NotFound from "routes/notFound"
import RedirectTo from "routes/redirectTo"
import Links from "routes/links"
import Markdown from 'routes/markdown'
import MDUI from 'routes/MDUI'

// Page
export default function rootRoutes() { return(
  <Routes>
    <Route path="*"       element={ <NotFound /> } />
    <Route path="/links"  element={ <Links /> } />
    <Route path="/mdui"   element={ <MDUI /> } />

    {
      (ParentBrands).map( brand => { return(
        <Route key={brand.title} path={brand.route} element={ <Markdown readme={brand.readme} /> } />
      )})
    }

    {
      (Redirects).map( brand => { return(
        (brand.links).map( path => {
          if(path.from !== null && path.to !== null) { return(
            <Route path={path.from} element={ <RedirectTo path={path.from} brand={brand.brand} url={path.to} /> } />
          )} else {
            return null
          }
        })
      )})
    }      
  </Routes>
)}

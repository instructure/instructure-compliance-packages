// Modules
import { Routes, Route } from 'react-router-dom'

//Components
import Redirects from 'components/redirects'
import ParentBrands from 'components/parentBrands'

// Routes
import NotFound from "routes/notFound"
import RedirectTo from "routes/redirectTo"
import Links from "routes/links"
import Markdown from 'routes/markdown'


// Page
const RootRoutes = () => (
  <Routes>
    <Route path="*"         element={ <NotFound /> } />
    <Route path="/links"    element={ <Links /> } />

    {
      (ParentBrands).map( brand => { return(
        <Route key={brand.title} path={brand.route} element={ <Markdown url={brand.readme} /> } />
      )})
    }

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

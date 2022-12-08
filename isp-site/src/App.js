// Modules
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { InstUISettingsProvider, instructure } from '@instructure/ui'

// Components
import RenderTopNavBar from 'components/RenderTopNavBar'

// Styles
import './App.css'

// Routes
import Root from './routes/root'
import Canvas from './routes/canvas'
import Mastery from './routes/mastery'
import Impact from './routes/impact'
import Elevate from './routes/elevate'

// Variables
const Brands = ['Canvas', 'Mastery', 'Impact', 'Elevate']

const router = createBrowserRouter(
  [
    { path: "/",        element: <Root /> },
    { path: "canvas",   element: <Canvas /> },
    { path: "mastery",  element: <Mastery />},
    { path: "impact",   element: <Impact /> },
    { path: "elevate",  element: <Elevate /> }
  ],
  {
    basename: "/instructure-security-package"
  }
)

function App() { return (
  <InstUISettingsProvider theme={instructure}>
    <RenderTopNavBar />
    <RouterProvider router={router} />
  </InstUISettingsProvider>
)}

export default App;

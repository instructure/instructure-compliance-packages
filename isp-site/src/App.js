// Modules
import { HashRouter, Routes, Route } from "react-router-dom"
import { InstUISettingsProvider, instructure } from '@instructure/ui'

// Components
import RenderTopNavBar from 'components/RenderTopNavBar'
import 'components/toggle'


// Styles
import './App.css'

// Routes
import Root from './routes/root'
import Canvas from './routes/canvas'
import Mastery from './routes/mastery'
import Impact from './routes/impact'
import Elevate from './routes/elevate'

function App() { return (
  <InstUISettingsProvider theme={instructure}>
    <RenderTopNavBar />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/canvas" element={<Canvas />}></Route>
        <Route path="/mastery" element={<Mastery />}></Route>
        <Route path="/impact" element={<Impact />}></Route>
        <Route path="/elevate" element={<Elevate />}></Route>
      </Routes>
    </HashRouter>
  </InstUISettingsProvider>
  
)}

export default App;

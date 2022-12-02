import logo from './logo.svg'
import './App.css'
import { InstUISettingsProvider, instructure, Link, IconCanvasLogoLine } from '@instructure/ui'

// URLs
const canvas = "https://github.com/thedannywahl/instructure-security-package/archive/refs/heads/canvas-lms.zip"

function App() { return (
    <InstUISettingsProvider theme={instructure}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Edit <code>src/App.js</code> and save to reload. </p>
          <Link href={canvas} renderIcon={<IconCanvasLogoLine size="small" />}>Download the Canvas Security Package</Link>
        </header>
      </div>
    </InstUISettingsProvider>
  )}

export default App;

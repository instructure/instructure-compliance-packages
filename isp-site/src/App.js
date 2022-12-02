import { Button, InstUISettingsProvider, instructure } from '@instructure/ui'

function App() {
  return (
    <InstUISettingsProvider theme={instructure}>
      <Button>Hello from InstUI!</Button>
    </InstUISettingsProvider>
  )
}

export default App
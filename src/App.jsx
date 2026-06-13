import { useContext } from 'react'
import InputBox from './components/InputBox.jsx'
import SeaGrid from './components/SeaGrid.jsx'
import SettingsBox from './components/SettingsBox.jsx'
import { SettingsContext } from './context/SettingsContext.jsx'

function App() {
  const { settings } = useContext(SettingsContext)

  return (
    <div style={{ 
      backgroundColor: settings.backgroundColor, 
    }}>
      <SettingsBox />
      <SeaGrid />
      <InputBox />
    </div>
  )
}

export default App

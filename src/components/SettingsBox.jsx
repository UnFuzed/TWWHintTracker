import { useContext } from 'react'
import { SettingsContext } from '../context/SettingsContext.jsx'

function SettingsBox() {
  const { settings, updateSetting } = useContext(SettingsContext)

  return (
    <div>
      <h1>The Wind Waker Randomizer Hint Tracker</h1>
      
      <div style={{ padding: '5px' }}>
        <input 
            type="checkbox" 
            id="show-blue-chu" 
            checked={settings.showBlueChu}
            onChange={(e) => updateSetting('showBlueChu', e.target.checked)}
            />
        <label htmlFor="show-blue-chu">Show Blue Chu</label>
    </div>

      <div style={{ padding: '5px' }}>
        <input 
          type="checkbox" 
          id="show-old-man-ho-ho" 
          checked={settings.showOldManHoHo}
          onChange={(e) => updateSetting('showOldManHoHo', e.target.checked)}
        />
      <label htmlFor="show-old-man-ho-ho">Show Old Man Ho Ho</label>
      </div>

      <div style={{ padding: '5px' }}>
        <label htmlFor="background-color">Background Color: </label>
        <input 
          type="color" 
          id="background-color"
          value={settings.backgroundColor}
          onChange={(e) => updateSetting('backgroundColor', e.target.value)}
        />
      </div>
    </div>
  );
}

export default SettingsBox
import { createContext, useState, useEffect } from 'react'
import { defaultSettings } from '../data/constants.js'

export const SettingsContext = createContext()

function initializeSettings() {
  const saved = localStorage.getItem('settings')
  if (saved) {
    try {
      return JSON.parse(saved)
    } catch (error) {
      console.error('Failed to parse settings:', error)
      return defaultSettings
    }
  }
  return defaultSettings
}

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(initializeSettings)

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings))
  }, [settings])

  // Helper function to update a single setting
  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  )
}

import { LOCAL_STORAGE_KEY } from '../utils/constants'

import { setDarkTheme, setLightTheme } from './set-theme'

syncBtnText()
handleUserPersistedPreference()
handleUserChanges()
handleMediaQueryChanges()

function syncBtnText() {
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (!toggleModeBtn) return

  const initPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    .matches

  const initPrefersLight = window.matchMedia('(prefers-color-scheme: light)')
    .matches

  if (initPrefersDark) {
    toggleModeBtn.innerHTML = 'LIGHT'
  }

  if (initPrefersLight) {
    toggleModeBtn.innerHTML = 'DARK'
  }
}

export function handleUserPersistedPreference() {
  const persistedPreference = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!persistedPreference) return

  if (persistedPreference === 'DARK') {
    setDarkTheme()
  }

  if (persistedPreference === 'LIGHT') {
    setLightTheme()
  }
}

function handleUserChanges() {
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  toggleModeBtn.addEventListener('click', handleToggle)

  function handleToggle() {
    console.log('click')
    if (toggleModeBtn.innerHTML === 'DARK') {
      setDarkTheme()
      return
    }

    if (toggleModeBtn.innerHTML === 'LIGHT') {
      setLightTheme()
      return
    }
  }
}

function handleMediaQueryChanges() {
  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setDarkTheme()
      }
    })

  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setLightTheme()
      }
    })
}

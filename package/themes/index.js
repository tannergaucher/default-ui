import { setDarkMode, setLightMode } from '../modes'

syncBtnText()
handleUserThemeChanges()

function syncBtnText() {
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')
  if (!toggleModeBtn) return

  const initPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    .matches

  const initPrefersLight = window.matchMedia('(prefers-color-scheme: light)')
    .matches

  if (initPrefersDark) {
    toggleModeBtn.innerHTML = 'DARK'
  }

  if (initPrefersLight) {
    toggleModeBtn.innerHTML = 'LIGHT'
  }
}

function handleUserThemeChanges() {
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')
  if (!toggleModeBtn) return

  async function handleToggle() {
    if (toggleModeBtn.innerHTML.includes('DARK')) {
      setLightMode(currentTheme)
      return
    }

    if (toggleModeBtn.innerHTML.includes('LIGHT')) {
      setDarkMode(currentTheme)
      return
    }
  }
}

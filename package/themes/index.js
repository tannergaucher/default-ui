import { setDarkMode, setLightMode } from '../modes'

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
  console.log('handle')

  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (!toggleModeBtn) return

  toggleModeBtn.addEventListener('click', handleToggle)

  async function handleToggle() {
    if (toggleModeBtn.innerHTML === 'DARK') {
      setLightMode()
      return
    }

    if (toggleModeBtn.innerHTML === 'LIGHT') {
      setDarkMode()
      return
    }
  }
}

syncBtnText()
handleUserThemeChanges()

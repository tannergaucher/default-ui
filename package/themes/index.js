import { setDarkMode, setLightMode } from '../modes'

import tokens from '../tokens.json'

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

  toggleModeBtn.addEventListener('click', handleToggle)

  const themesFromToken = Object.keys(tokens.themes)

  console.log(`themesFromToken`, themesFromToken)

  // todo: dynamically create from tokens.json
  const themesArr = [
    'LIGHT',
    'DARK',
    'LIGHT READER',
    'DARK READER',
    'LIGHT VAPORWAVE',
    'DARK VAPORWAVE',
  ]

  async function handleToggle() {
    const prevText = toggleModeBtn.innerHTML
    const themeIndex = themesArr.indexOf(prevText.trim())
    const currentTheme = themesArr[themeIndex + 1]

    // import dynamic theme
    if (currentTheme === 'LIGHT READER' || currentTheme === 'DARK READER') {
      await import('./reader')
    }

    if (
      currentTheme === 'LIGHT VAPORWAVE' ||
      currentTheme === 'DARK VAPORWAVE'
    ) {
      await import('./vaporwave')
    }

    if (currentTheme === 'LIGHT' || currentTheme === 'DARK') {
      console.log(`reset`)
      // already imported, so must get and set vars declaratively here
      // document.documentElement.style.backgroundColor = 'lime'

      // update --bg-1, --bg-2, text-color, --grey
    }

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

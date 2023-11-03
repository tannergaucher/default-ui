export const TOGGLE_MODE_BTN_SELECTOR = '#toggle-mode-btn'
export const MODE_STORAGE_KEY = '@t_g/default-ui/mode-key'

export enum Mode {
  DARK = 'Dark',
  DARK_SEPIA = 'Dark Sepia',
  LIGHT = 'Light',
  LIGHT_SEPIA = 'Light Sepia',
}

export function useTheme() {
  handleUserLocalStoragePreference()
  handlePrefersColorSchemeEventChange()
  handleToggleButtonModeClick()
}

function handleUserLocalStoragePreference() {
  const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  const storageMode = localStorage.getItem(MODE_STORAGE_KEY) as Mode | null

  if (storageMode === null) {
    document.querySelector('html')?.setAttribute('theme', 'light')

    if (toggleModeBtn) {
      toggleModeBtn.innerHTML = 'light'
    }

    return
  }

  document.querySelector('html')?.setAttribute('theme', storageMode)

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = storageMode
  }
}

function handlePrefersColorSchemeEventChange() {
  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        document.querySelector('html')?.setAttribute('theme', 'dark')
      }
    })

  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        document.querySelector('html')?.setAttribute('theme', 'light')
      }
    })
}

function handleToggleButtonModeClick() {
  const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  toggleModeBtn?.addEventListener('click', () => {
    const modesArray = Object.values(Mode)

    let currentMode = localStorage.getItem(MODE_STORAGE_KEY) as Mode | null

    if (currentMode === null) {
      currentMode = Mode.LIGHT
    }

    const currentModeIndex = modesArray.indexOf(currentMode)
    const nextModeIndex =
      currentModeIndex + 1 === modesArray.length ? 0 : currentModeIndex + 1
    const nextMode = modesArray[nextModeIndex]

    document.querySelector('html')?.setAttribute('theme', nextMode)
    toggleModeBtn.innerHTML = nextMode
    localStorage.setItem(MODE_STORAGE_KEY, nextMode)
  })
}

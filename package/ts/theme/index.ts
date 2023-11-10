export const TOGGLE_MODE_BTN_SELECTOR = '#toggle-mode-btn'
export const THEME_STORAGE_KEY = '@t_g/default-ui/theme-key'

export enum Theme {
  DARK = 'Dark',
  DARK_SEPIA = 'Dark Sepia',
  LIGHT = 'Light',
  LIGHT_SEPIA = 'Light Sepia',
}

export function useTheme() {
  handleUserLocalStoragePreference()
  handlePrefersColorSchemeEventChange()
  handleThemeButtonClick()
}

function handleUserLocalStoragePreference() {
  const themeButton = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  const storageTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null

  if (storageTheme === null) {
    document.querySelector('html')?.setAttribute('theme', 'light')

    if (themeButton) {
      themeButton.innerHTML = 'light'
    }

    return
  }

  document.querySelector('html')?.setAttribute('theme', storageTheme)

  if (themeButton) {
    themeButton.innerHTML = storageTheme
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

function handleThemeButtonClick() {
  const themeButton = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  themeButton?.addEventListener('click', () => {
    const themes = Object.values(Theme)

    let currentTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null

    if (currentTheme === null) {
      currentTheme = Theme.LIGHT
    }

    const currentThemeIndex = themes.indexOf(currentTheme)
    const nextThemeIndex =
      currentThemeIndex + 1 === themes.length ? 0 : currentThemeIndex + 1
    const nextTheme = themes[nextThemeIndex]

    document.querySelector('html')?.setAttribute('theme', nextTheme)
    themeButton.innerHTML = nextTheme
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  })
}

export const TOGGLE_THEME_BTN_SELECTOR = '#theme-btn'
export const THEME_STORAGE_KEY = '@t_g/default-ui/theme-key'

export enum Theme {
  DARK = 'Dark',
  DARK_SEPIA = 'Dark Sepia',
  LIGHT = 'Light',
  LIGHT_SEPIA = 'Light Sepia',
}

export function useTheme() {
  initializeTheme()
  handleUserSystemPreference()
  handleThemeButtonClick()
}

const themeButton = document.querySelector(TOGGLE_THEME_BTN_SELECTOR)

const storageTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null

function initializeTheme() {
  if (!themeButton) return

  // If there is no theme in local storage, initialize the theme to light
  if (storageTheme === null) {
    document.querySelector('html')?.setAttribute('theme', Theme.LIGHT)
    themeButton.innerHTML = Theme.LIGHT

    return
  }

  // If there is a theme in local storage, initialize the theme to the value in local storage
  document.querySelector('html')?.setAttribute('theme', storageTheme)
  themeButton.innerHTML = storageTheme
}

function handleUserSystemPreference() {
  // If the user's system preference is dark, set the theme to dark
  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        document.querySelector('html')?.setAttribute('theme', Theme.DARK)
      }
    })

  // If the user's system preference is light, set the theme to light
  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        document.querySelector('html')?.setAttribute('theme', Theme.LIGHT)
      }
    })
}

function handleThemeButtonClick() {
  if (!themeButton) return

  themeButton.addEventListener('click', () => {
    const allThemes = Object.values(Theme)

    const currentThemeIndex = storageTheme ? allThemes.indexOf(storageTheme) : 0

    const nextThemeIndex =
      currentThemeIndex + 1 === allThemes.length ? 0 : currentThemeIndex + 1

    const nextTheme = allThemes[nextThemeIndex]

    document.querySelector('html')?.setAttribute('theme', nextTheme)

    themeButton.innerHTML = nextTheme

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  })
}

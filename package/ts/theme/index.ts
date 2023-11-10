export const TOGGLE_THEME_BTN_SELECTOR = '#theme-btn'
export const THEME_STORAGE_KEY = '@t_g/default-ui/theme-key'

export enum Theme {
  DARK = 'Dark Theme',
  DARK_SEPIA = 'Dark Sepia Theme',
  LIGHT = 'Light Theme',
  LIGHT_SEPIA = 'Light Sepia Theme',
}

export function useTheme() {
  initializeTheme()
  handleUserSystemPreference()
  handleThemeButtonClick()
}

const themeButton = document.querySelector('button[aria-label="Toggle theme"]')

if (!themeButton) {
  throw new Error(
    'No theme button found. Please add a button element with aria-label="Toggle theme" to the the document."'
  )
}

const storageTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null

function initializeTheme() {
  if (storageTheme === null) {
    setTheme(Theme.LIGHT)
    return
  }

  setTheme(storageTheme)
}

function handleUserSystemPreference() {
  // If the user's system preference is dark, set the theme to dark
  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setTheme(Theme.DARK)
      }
    })

  // If the user's system preference is light, set the theme to light
  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setTheme(Theme.LIGHT)
      }
    })
}

function handleThemeButtonClick() {
  if (!themeButton) return

  themeButton.addEventListener('click', () => {
    const allThemes = Object.values(Theme)
    const currentThemeIndex = allThemes.indexOf(
      document.querySelector('html')?.getAttribute('theme') as Theme
    )
    const nextThemeIndex =
      currentThemeIndex + 1 === allThemes.length ? 0 : currentThemeIndex + 1
    const nextTheme = allThemes[nextThemeIndex]

    setTheme(nextTheme)
  })
}

function setTheme(theme: Theme) {
  if (!themeButton) return

  document.querySelector('html')?.setAttribute('theme', theme)
  themeButton.innerHTML = theme
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

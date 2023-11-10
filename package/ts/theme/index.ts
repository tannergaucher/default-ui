export const THEME_STORAGE_KEY = '@t_g/default-ui/theme-key'

export enum Theme {
  LIGHT = 'Light Theme',
  DARK = 'Dark Theme',
  LIGHT_SEPIA = 'Light Sepia Theme',
  DARK_SEPIA = 'Dark Sepia Theme',
  SOLARIZED_LIGHT = 'Solarized Light Theme',
  SOLARIZED_DARK = 'Solarized Dark Theme',
  MONOKAI_LIGHT = 'Monokai Pro Light Theme',
  MONOKAI_DARK = 'Monokai Pro Dark Theme',
  DRACULA_LIGHT = 'Dracula Light Theme',
  DRACULA_DARK = 'Dracula Dark Theme',
}

export function useTheme() {
  initializeTheme()
  handleUserSystemPreference()
  handleThemeButtonClick()
}

const themeButton = document.querySelector(
  'button[aria-label="Toggle Theme"]'
) as HTMLButtonElement | null

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
    // If the theme button has a data-toggle attributes specified, toggle between those themes, otherwise toggle between all themes
    const declaredThemes = themeButton
      .getAttribute('data-toggle')
      ?.split(',') as Theme[] | undefined

    const validThemes = declaredThemes?.length
      ? declaredThemes
      : Object.values(Theme)

    const currentThemeIndex = validThemes.indexOf(
      document.querySelector('html')?.getAttribute('theme') as Theme
    )

    const nextThemeIndex =
      currentThemeIndex + 1 === validThemes.length ? 0 : currentThemeIndex + 1

    const nextTheme = validThemes[nextThemeIndex]

    setTheme(nextTheme)
  })
}

function setTheme(theme: Theme) {
  if (!themeButton) return

  document.querySelector('html')?.setAttribute('theme', theme)
  themeButton.innerHTML = theme
  themeButton.name = theme
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

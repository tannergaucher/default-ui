export const TOGGLE_MODE_BTN_SELECTOR = '#toggle-mode-btn'
export const THEME_STORAGE_KEY = '@ss-theme-key'

enum BackgroundProperty {
  BACKGROUND_1 = '--bg-1',
  BACKGROUND_2 = '--bg-2',
}

export enum AccentProperty {
  ACCENT_1 = '--accent-1',
  ACCENT_2 = '--accent-2',
}

enum GreyProperty {
  GREY = '--grey',
}

enum TextProperty {
  TEXT_COLOR = '--text-color',
}

type PropertyString =
  | BackgroundProperty
  | AccentProperty
  | GreyProperty
  | TextProperty

export enum Mode {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export function useTheme() {
  // 1. handle setting up the theme based on the user's explicit preference
  const storageMode = localStorage.getItem(THEME_STORAGE_KEY) as Mode | null

  if (storageMode) {
    setTheme({
      mode: storageMode,
    })
  }

  // 2. Handle setting the theme based on the user's OS preference
  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setTheme({
          mode: Mode.DARK,
        })
      }
    })

  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setTheme({
          mode: Mode.LIGHT,
        })
      }
    })

  // 3. Handle setting up the toggle mode button listener
  const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  toggleModeBtn?.addEventListener('click', () => {
    const nextMode =
      toggleModeBtn.innerHTML === Mode.DARK ? Mode.LIGHT : Mode.DARK

    return setTheme({
      mode: nextMode,
    })
  })
}

function setTheme(theme: { mode: Mode }) {
  const { mode } = theme

  const cssVariableMap = {
    [BackgroundProperty.BACKGROUND_1]: getPropertyString(
      BackgroundProperty.BACKGROUND_1,
      mode
    ),
    [BackgroundProperty.BACKGROUND_2]: getPropertyString(
      BackgroundProperty.BACKGROUND_2,
      mode
    ),
    [TextProperty.TEXT_COLOR]: getPropertyString(TextProperty.TEXT_COLOR, mode),
    [AccentProperty.ACCENT_1]: getPropertyString(AccentProperty.ACCENT_1, mode),
    [AccentProperty.ACCENT_2]: getPropertyString(AccentProperty.ACCENT_2, mode),
    [GreyProperty.GREY]: getPropertyString(GreyProperty.GREY, mode),
  }

  for (const [key, value] of Object.entries(cssVariableMap)) {
    document.documentElement.style.setProperty(key, value)
  }

  const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = mode
  }

  localStorage.setItem(THEME_STORAGE_KEY, mode)
}

function getPropertyString(property: PropertyString, mode: Mode) {
  const variableSuffix = mode === Mode.DARK ? 'dark' : 'light'

  switch (property) {
    case BackgroundProperty.BACKGROUND_1:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${BackgroundProperty.BACKGROUND_1}-${variableSuffix}`
      )

    case BackgroundProperty.BACKGROUND_2:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${BackgroundProperty.BACKGROUND_2}-${variableSuffix}`
      )

    case TextProperty.TEXT_COLOR:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${TextProperty.TEXT_COLOR}-${variableSuffix}`
      )

    case AccentProperty.ACCENT_1:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${AccentProperty.ACCENT_1}-${variableSuffix}`
      )

    case AccentProperty.ACCENT_2:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${AccentProperty.ACCENT_2}-${variableSuffix}`
      )

    case GreyProperty.GREY:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${GreyProperty.GREY}-${variableSuffix}`
      )
  }
}

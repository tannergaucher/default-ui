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
  // 1. look for the theme in local storage

  // todo update to theme object
  const storageMode = localStorage.getItem(THEME_STORAGE_KEY) as Mode | null

  if (storageMode) {
    setTheme({
      mode: storageMode,
    })
  }

  // 2. handle setting up listeners for the media query change event
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

  // 3. Handle user theme toggle events
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

  const bg1Value = getPropertyString(BackgroundProperty.BACKGROUND_1, mode)
  const bg2Value = getPropertyString(BackgroundProperty.BACKGROUND_2, mode)
  const textColorValue = getPropertyString(TextProperty.TEXT_COLOR, mode)
  const accent1Value = getPropertyString(AccentProperty.ACCENT_1, mode)
  const accent2Value = getPropertyString(AccentProperty.ACCENT_2, mode)
  const greyValue = getPropertyString(GreyProperty.GREY, mode)

  document.documentElement.style.setProperty(
    BackgroundProperty.BACKGROUND_1,
    bg1Value
  )
  document.documentElement.style.setProperty(
    BackgroundProperty.BACKGROUND_2,
    bg2Value
  )
  document.documentElement.style.setProperty(
    TextProperty.TEXT_COLOR,
    textColorValue
  )
  document.documentElement.style.setProperty(
    AccentProperty.ACCENT_1,
    accent1Value
  )
  document.documentElement.style.setProperty(
    AccentProperty.ACCENT_2,
    accent2Value
  )
  document.documentElement.style.setProperty(GreyProperty.GREY, greyValue)

  const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = mode === Mode.DARK ? Mode.LIGHT : Mode.DARK
  }

  localStorage.setItem(THEME_STORAGE_KEY, mode)
}

function getPropertyString(property: PropertyString, mode: Mode) {
  switch (property) {
    case BackgroundProperty.BACKGROUND_1:
      return getComputedStyle(document.documentElement).getPropertyValue(
        mode === Mode.DARK ? '--bg-1-dark' : '--bg-1-light'
      )

    case BackgroundProperty.BACKGROUND_2:
      return getComputedStyle(document.documentElement).getPropertyValue(
        mode === Mode.DARK ? '--bg-2-dark' : '--bg-2-light'
      )

    case TextProperty.TEXT_COLOR:
      return getComputedStyle(document.documentElement).getPropertyValue(
        mode === Mode.DARK ? '--text-color-dark' : '--text-color-light'
      )

    case AccentProperty.ACCENT_1:
      return getComputedStyle(document.documentElement).getPropertyValue(
        mode === Mode.DARK ? '--accent-1-dark' : '--accent-1-light'
      )

    case AccentProperty.ACCENT_2:
      return getComputedStyle(document.documentElement).getPropertyValue(
        mode === Mode.DARK ? '--accent-2-dark' : '--accent-2-light'
      )

    case GreyProperty.GREY:
      return getComputedStyle(document.documentElement).getPropertyValue(
        mode === Mode.DARK ? '--grey-dark' : '--grey-light'
      )
  }
}

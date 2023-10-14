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

export enum GreyProperty {
  GREY = '--grey',
}

export enum TextProperty {
  TEXT_COLOR = '--text-color',
}

export enum ShadowProperty {
  SHADOW_COLOR = '--shadow-color',
}

export enum CodeProperty {
  BACKGROUND = '--code-bg',
}

export type ColorPropertyString =
  | BackgroundProperty
  | AccentProperty
  | GreyProperty
  | TextProperty
  | ShadowProperty
  | CodeProperty

export enum Mode {
  DARK = 'DARK',
  DARK_SEPIA = 'DARK SEPIA',
  LIGHT = 'LIGHT',
  LIGHT_SEPIA = 'LIGHT SEPIA',
}

export function useTheme() {
  handleUserPersistedPreference()
  handleUserSystemPrefersSchemeEventChange()
  handleToggleModeClick()
}

function handleUserPersistedPreference() {
  const storageMode = localStorage.getItem(THEME_STORAGE_KEY) as Mode | null

  if (storageMode) {
    setTheme({
      mode: storageMode,
    })
  }
}

function handleUserSystemPrefersSchemeEventChange() {
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
}

function handleToggleModeClick() {
  const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  const modesArray = Object.values(Mode)

  toggleModeBtn?.addEventListener('click', () => {
    const currentMode = localStorage.getItem(THEME_STORAGE_KEY) as Mode

    const currentModeIndex = modesArray.indexOf(currentMode)

    const nextModeIndex =
      currentModeIndex + 1 === modesArray.length ? 0 : currentModeIndex + 1

    const nextMode = modesArray[nextModeIndex]

    return setTheme({
      mode: nextMode,
    })
  })
}

type ColorVariableMap = { [key in ColorPropertyString]: string }

function setTheme(theme: { mode: Mode }) {
  const { mode } = theme

  const colorVariableMap: ColorVariableMap = {
    [BackgroundProperty.BACKGROUND_1]: getColorPropertyString(
      BackgroundProperty.BACKGROUND_1,
      mode
    ),
    [BackgroundProperty.BACKGROUND_2]: getColorPropertyString(
      BackgroundProperty.BACKGROUND_2,
      mode
    ),
    [TextProperty.TEXT_COLOR]: getColorPropertyString(
      TextProperty.TEXT_COLOR,
      mode
    ),
    [AccentProperty.ACCENT_1]: getColorPropertyString(
      AccentProperty.ACCENT_1,
      mode
    ),
    [AccentProperty.ACCENT_2]: getColorPropertyString(
      AccentProperty.ACCENT_2,
      mode
    ),
    [GreyProperty.GREY]: getColorPropertyString(GreyProperty.GREY, mode),
    [ShadowProperty.SHADOW_COLOR]: getColorPropertyString(
      ShadowProperty.SHADOW_COLOR,
      mode
    ),
    [CodeProperty.BACKGROUND]: getColorPropertyString(
      CodeProperty.BACKGROUND,
      mode
    ),
  }

  for (const [key, value] of Object.entries(colorVariableMap)) {
    document.documentElement.style.setProperty(key, value)
  }

  const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = mode
  }

  localStorage.setItem(THEME_STORAGE_KEY, mode)
}

function getColorPropertyString(property: ColorPropertyString, mode: Mode) {
  const getModeSuffix = (mode: Mode) => {
    switch (mode) {
      case Mode.DARK:
        return 'dark'
      case Mode.LIGHT:
        return 'light'
      case Mode.LIGHT_SEPIA:
        return 'light-sepia'
      case Mode.DARK_SEPIA:
        return 'dark-sepia'
    }
  }

  switch (property) {
    case BackgroundProperty.BACKGROUND_1:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${BackgroundProperty.BACKGROUND_1}-${getModeSuffix(mode)}`
      )
    case BackgroundProperty.BACKGROUND_2:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${BackgroundProperty.BACKGROUND_2}-${getModeSuffix(mode)}`
      )
    case TextProperty.TEXT_COLOR:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${TextProperty.TEXT_COLOR}-${getModeSuffix(mode)}`
      )
    case AccentProperty.ACCENT_1:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${AccentProperty.ACCENT_1}-${getModeSuffix(mode)}`
      )
    case AccentProperty.ACCENT_2:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${AccentProperty.ACCENT_2}-${getModeSuffix(mode)}`
      )
    case GreyProperty.GREY:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${GreyProperty.GREY}-${getModeSuffix(mode)}`
      )
    case ShadowProperty.SHADOW_COLOR:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${ShadowProperty.SHADOW_COLOR}-${getModeSuffix(mode)}`
      )
    case CodeProperty.BACKGROUND:
      return getComputedStyle(document.documentElement).getPropertyValue(
        `${CodeProperty.BACKGROUND}-${getModeSuffix(mode)}`
      )
  }
}

export const TOGGLE_MODE_BTN_SELECTOR = '#toggle-mode-btn'
export const MODE_STORAGE_KEY = '@t_g/default-ui/mode-key'

import { useProgressiveEnhancements } from '../progressive-enhancements'

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
  DARK = 'Dark',
  DARK_SEPIA = 'Dark Sepia',
  LIGHT = 'Light',
  LIGHT_SEPIA = 'Light Sepia',
}

export function useTheme({
  withProgressiveEnhancements,
}: {
  withProgressiveEnhancements: boolean
}) {
  if (withProgressiveEnhancements) {
    useProgressiveEnhancements()
  }

  handleUserLocalStoragePreference()
  handlePrefersColorSchemeEventChange()
  handleToggleButtonModeClick()
}

function handleUserLocalStoragePreference() {
  const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

  const storageMode = localStorage.getItem(MODE_STORAGE_KEY) as Mode | null

  if (storageMode === null) {
    document.querySelector('html')?.setAttribute('data-theme', 'light')

    if (toggleModeBtn) {
      toggleModeBtn.innerHTML = 'light'
    }

    return
  }

  document.querySelector('html')?.setAttribute('data-theme', storageMode)

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = storageMode
  }
}

function handlePrefersColorSchemeEventChange() {
  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        document.querySelector('html')?.setAttribute('data-theme', 'dark')
      }
    })

  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        document.querySelector('html')?.setAttribute('data-theme', 'light')
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

    document.querySelector('html')?.setAttribute('data-theme', nextMode)
    toggleModeBtn.innerHTML = nextMode
    localStorage.setItem(MODE_STORAGE_KEY, nextMode)
  })
}

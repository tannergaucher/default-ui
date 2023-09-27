import '../index.css'
import './site-theme.css'

import '../package/js/progressive-enhancements'

import { useProgressiveEnhancements } from '../package/js/progressive-enhancements'
import { Mode, AccentProperty } from '../package/js/theme'
import {
  TOGGLE_MODE_BTN_SELECTOR,
  THEME_STORAGE_KEY,
  useTheme,
} from '../package/js/theme'

useProgressiveEnhancements()
useTheme()

type ToggleModeButtonEvent = Event & {
  target: {
    innerHTML: Mode.DARK | Mode.LIGHT
  }
}

type AccentPickerInputEvent = Event & {
  target: {
    value: string
  }
}

type AccentInput = Element & {
  value: string
}

type AccentPicker =
  | Element & {
      style: {
        display: 'inline' | 'none'
      }
    }

const accent1LightInput = document.querySelector(
  '#accent-1-light-input'
) as AccentInput | null

const accent1DarkInput = document.querySelector(
  '#accent-1-dark-input'
) as AccentInput | null

const accent2LightInput = document.querySelector(
  '#accent-2-light-input'
) as AccentInput | null

const accent2DarkInput = document.querySelector(
  '#accent-2-dark-input'
) as AccentInput | null

const accentLightPicker = document.querySelector(
  '#accent-light-picker'
) as AccentPicker | null

const accentDarkPicker = document.querySelector(
  '#accent-dark-picker'
) as AccentPicker | null

window.addEventListener('load', setInitialAccentPickerValues)

accent1LightInput?.addEventListener('input', (e) => {
  handleAccentChange(
    e as AccentPickerInputEvent,
    AccentProperty.ACCENT_1,
    Mode.LIGHT
  )
})

accent2LightInput?.addEventListener('input', (e) => {
  handleAccentChange(
    e as AccentPickerInputEvent,
    AccentProperty.ACCENT_2,
    Mode.LIGHT
  )
})

accent1DarkInput?.addEventListener('input', (e) => {
  handleAccentChange(
    e as AccentPickerInputEvent,
    AccentProperty.ACCENT_1,
    Mode.DARK
  )
})

accent2DarkInput?.addEventListener('input', (e) => {
  handleAccentChange(
    e as AccentPickerInputEvent,
    AccentProperty.ACCENT_2,
    Mode.DARK
  )
})

function toggleUserAccentPicker(e: ToggleModeButtonEvent) {
  if (!accentLightPicker || !accentDarkPicker) {
    return
  }

  if (e.target.innerHTML === Mode.LIGHT) {
    accentLightPicker.style.display = 'inline'
    accentDarkPicker.style.display = 'none'
  }

  if (e.target.innerHTML === Mode.DARK) {
    accentDarkPicker.style.display = 'inline'
    accentLightPicker.style.display = 'none'
  }
}

const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

toggleModeBtn?.addEventListener('click', (e) => {
  const event = e as ToggleModeButtonEvent

  toggleUserAccentPicker(event)
})

function setInitialAccentPickerValues() {
  if (!accentDarkPicker || !accentLightPicker) {
    return
  }

  if (
    !accent1LightInput ||
    !accent1DarkInput ||
    !accent2LightInput ||
    !accent2DarkInput
  ) {
    return
  }

  accent1LightInput.value = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-1-light')

  accent1DarkInput.value = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-1-dark')

  accent2LightInput.value = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-2-light')

  accent2DarkInput.value = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-2-dark')

  const isPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
  const persistedModePreference = localStorage.getItem(THEME_STORAGE_KEY)

  if (!persistedModePreference && isPrefersDark.matches) {
    accentLightPicker.style.display = 'none'
    accentDarkPicker.style.display = 'inline'

    return
  }

  if (persistedModePreference === Mode.DARK) {
    accentLightPicker.style.display = 'none'
    accentDarkPicker.style.display = 'inline'

    return
  }

  if (
    persistedModePreference === Mode.LIGHT &&
    accentDarkPicker &&
    accentLightPicker
  ) {
    accentLightPicker.style.display = 'inline'
    accentDarkPicker.style.display = 'none'

    return
  }
}

// consolidate to one function

function handleAccentChange(
  e: AccentPickerInputEvent,
  accentProperty: AccentProperty,
  mode: Mode
) {
  if (mode === Mode.LIGHT) {
    if (accentProperty === AccentProperty.ACCENT_1) {
      document.documentElement.style.setProperty(
        '--accent-1-light',
        e.target.value
      )
    }

    if (accentProperty === AccentProperty.ACCENT_2) {
      document.documentElement.style.setProperty(
        '--accent-2-light',
        e.target.value
      )
    }
  }

  if (mode === Mode.DARK) {
    if (accentProperty === AccentProperty.ACCENT_1) {
      document.documentElement.style.setProperty(
        '--accent-1-dark',
        e.target.value
      )
    }

    if (accentProperty === AccentProperty.ACCENT_2) {
      document.documentElement.style.setProperty(
        '--accent-2-dark',
        e.target.value
      )
    }
  }
}

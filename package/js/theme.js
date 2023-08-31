export const THEME_STORAGE_KEY = 'ss-theme-preference'

export const DARK = 'DARK'
export const LIGHT = 'LIGHT'
export const TOGGLE_MODE_BTN_SELECTOR = '#toggle-mode-btn'

const toggleModeBtn = document.querySelector(TOGGLE_MODE_BTN_SELECTOR)

toggleModeBtn.addEventListener('click', handleToggleTheme)

export default function syncTheme() {
  syncThemeBtnText()
  handleUserPersistedTheme()
  handleMediaQueryChangeEvent()
}
syncTheme()

function syncThemeBtnText() {
  if (!toggleModeBtn) return

  toggleModeBtn.style.display = 'none'

  const initPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    .matches

  const initPrefersLight = window.matchMedia('(prefers-color-scheme: light)')
    .matches

  if (initPrefersDark) {
    toggleModeBtn.innerHTML = LIGHT
  }

  if (initPrefersLight) {
    toggleModeBtn.innerHTML = DARK
  }

  if (toggleModeBtn.innerHTML) {
    toggleModeBtn.style.display = 'initial'
  }
}

export function handleUserPersistedTheme() {
  const persistedPreference = localStorage.getItem(THEME_STORAGE_KEY)

  if (!persistedPreference) return

  if (persistedPreference === DARK) {
    setDarkTheme()
  }

  if (persistedPreference === LIGHT) {
    setLightTheme()
  }
}

function handleToggleTheme() {
  if (toggleModeBtn.innerHTML === DARK) {
    return setDarkTheme()
  }

  if (toggleModeBtn.innerHTML === LIGHT) {
    return setLightTheme()
  }
}

function handleMediaQueryChangeEvent() {
  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setDarkTheme()
      }
    })

  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setLightTheme()
      }
    })
}

function setDarkTheme() {
  const bg1Dark = getComputedStyle(document.documentElement).getPropertyValue(
    '--bg-1-dark'
  )
  const bg2Dark = getComputedStyle(document.documentElement).getPropertyValue(
    '--bg-2-dark'
  )
  const textColorDark = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--text-color-dark')
  const greyDark = getComputedStyle(document.documentElement).getPropertyValue(
    '--grey-dark'
  )
  const accent1Dark = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-1-dark')
  const accent2Dark = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-2-dark')

  document.documentElement.style.setProperty('--bg-1', bg1Dark)
  document.documentElement.style.setProperty('--bg-2', bg2Dark)
  document.documentElement.style.setProperty('--text-color', textColorDark)
  document.documentElement.style.setProperty('--grey', greyDark)
  document.documentElement.style.setProperty('--accent-1', accent1Dark)
  document.documentElement.style.setProperty('--accent-2', accent2Dark)

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = LIGHT
  }

  localStorage.setItem(THEME_STORAGE_KEY, DARK)
}

function setLightTheme() {
  const bg1Light = getComputedStyle(document.documentElement).getPropertyValue(
    '--bg-1-light'
  )
  const bg2Light = getComputedStyle(document.documentElement).getPropertyValue(
    '--bg-2-light'
  )
  const textColorLight = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--text-color-light')
  const greyLight = getComputedStyle(document.documentElement).getPropertyValue(
    '--grey-light'
  )
  const accent1Light = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-1-light')
  const accent2Light = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-2-light')

  document.documentElement.style.setProperty('--bg-1', bg1Light)
  document.documentElement.style.setProperty('--bg-2', bg2Light)
  document.documentElement.style.setProperty('--text-color', textColorLight)
  document.documentElement.style.setProperty('--grey', greyLight)
  document.documentElement.style.setProperty('--accent-1', accent1Light)
  document.documentElement.style.setProperty('--accent-2', accent2Light)

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = DARK
  }

  localStorage.setItem(THEME_STORAGE_KEY, LIGHT)
}

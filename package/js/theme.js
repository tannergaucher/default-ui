const { LOCAL_STORAGE_KEY } = require('../utils/constants')

export default function initTheme() {
  syncBtnText()
  handleUserPersistedPreference()
  handleUserChanges()
  handleMediaQueryChanges()
}

initTheme()

function syncBtnText() {
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (!toggleModeBtn) return

  toggleModeBtn.style.display = 'none'

  const initPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    .matches

  const initPrefersLight = window.matchMedia('(prefers-color-scheme: light)')
    .matches

  if (initPrefersDark) {
    toggleModeBtn.innerHTML = 'LIGHT THEME'
  }

  if (initPrefersLight) {
    toggleModeBtn.innerHTML = 'DARK THEME'
  }

  if (toggleModeBtn.innerHTML) {
    toggleModeBtn.style.display = 'initial'
  }
}

export function handleUserPersistedPreference() {
  const persistedPreference = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (!persistedPreference) return

  if (persistedPreference === 'DARK THEME') {
    setDarkTheme()
  }

  if (persistedPreference === 'LIGHT THEME') {
    setLightTheme()
  }
}

function handleUserChanges() {
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (!toggleModeBtn) return

  toggleModeBtn.addEventListener('click', handleToggle)

  function handleToggle() {
    if (toggleModeBtn.innerHTML === 'DARK THEME') {
      setDarkTheme()
      return
    }

    if (toggleModeBtn.innerHTML === 'LIGHT THEME') {
      setLightTheme()
      return
    }
  }
}

function handleMediaQueryChanges() {
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

  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = 'LIGHT THEME'
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, 'DARK THEME')
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

  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (toggleModeBtn) {
    toggleModeBtn.innerHTML = 'DARK THEME'
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, 'LIGHT THEME')
}

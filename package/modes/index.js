import { LOCAL_STORAGE_KEY } from '../utils/constants'

export function setDarkMode(currentTheme) {
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
    toggleModeBtn.innerHTML = `${currentTheme ? currentTheme : `DARK`}`
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, 'DARK')
}

export function setLightMode(currentTheme) {
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
    toggleModeBtn.innerHTML = `${currentTheme ? currentTheme : `LIGHT`}`
  }

  // localStorage.setItem(LOCAL_STORAGE_KEY, 'LIGHT')
}

function handleMediaQueryChanges() {
  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setDarkMode()
      }
    })

  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        setLightMode()
      }
    })
}

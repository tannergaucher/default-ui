const LOCAL_STORAGE_KEY = 'ss-theme-preference'

getMode()
toggleMode()
watchMode()

export function getMode() {
  let myMode = ''

  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (!toggleModeBtn) return

  // Check user preferred setting first to display btn text state correctly
  const initPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    .matches

  const initPrefersLight = window.matchMedia('(prefers-color-scheme: light)')
    .matches

  if (initPrefersDark) {
    toggleModeBtn.innerHTML = 'LIGHT'
    myMode = 'DARK'
  }

  if (initPrefersLight) {
    toggleModeBtn.innerHTML = 'DARK'
    myMode = 'LIGHT'
  }

  // Also check persisted preference
  const persistedPreference = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (persistedPreference === 'DARK') {
    setDarkTheme()
    myMode = 'DARK'
  }

  if (persistedPreference === 'LIGHT') {
    setLightTheme()
    myMode = 'LIGHT'
  }

  return myMode
}

export function toggleMode() {
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (!toggleModeBtn) return

  toggleModeBtn.addEventListener('click', handleToggle)

  function handleToggle() {
    if (toggleModeBtn.innerHTML === 'DARK') {
      setDarkTheme()
      return
    }

    if (toggleModeBtn.innerHTML === 'LIGHT') {
      setLightTheme()
      return
    }
  }
}

export default toggleMode

export function setDarkTheme() {
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

  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  document.documentElement.style.setProperty('--bg-1', bg1Dark)
  document.documentElement.style.setProperty('--bg-2', bg2Dark)
  document.documentElement.style.setProperty('--text-color', textColorDark)
  document.documentElement.style.setProperty('--grey', greyDark)

  toggleModeBtn.innerHTML = 'LIGHT'
  localStorage.setItem(LOCAL_STORAGE_KEY, 'DARK')
}

export function setLightTheme() {
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
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  document.documentElement.style.setProperty('--bg-1', bg1Light)
  document.documentElement.style.setProperty('--bg-2', bg2Light)
  document.documentElement.style.setProperty('--text-color', textColorLight)
  document.documentElement.style.setProperty('--grey', greyLight)

  toggleModeBtn.innerHTML = 'DARK'
  localStorage.setItem(LOCAL_STORAGE_KEY, 'LIGHT')
}

export function watchMode() {
  // Also listen for changes to user prefers media query
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  if (!toggleModeBtn) return

  window
    .matchMedia('(prefers-color-scheme:  dark)')
    .addEventListener('change', (e) => {
      console.log(`e`, e)

      if (e.matches) {
        setDarkTheme()
      }
    })

  window
    .matchMedia('(prefers-color-scheme:  light)')
    .addEventListener('change', (e) => {
      console.log(`e`, e)

      if (e.matches) {
        setLightTheme()
      }
    })
}

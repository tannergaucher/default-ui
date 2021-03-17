const LOCAL_STORAGE_KEY = 'ss-site'

async function toggleMode() {
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  // Check user preferred setting first to display btn text state correctly
  const initPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    .matches

  const initPrefersLight = window.matchMedia('(prefers-color-scheme: light)')
    .matches

  if (initPrefersDark) {
    toggleModeBtn.innerHTML = 'LIGHT'
  }

  if (initPrefersLight) {
    toggleModeBtn.innerHTML = 'DARK'
  }

  // Check persisted preference in local storage and override user prefers
  const persistedPreference = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (persistedPreference === 'DARK') {
    setDarkTheme()
  }

  if (persistedPreference === 'LIGHT') {
    setLightTheme()
  }

  // Also listen for changes to user prefers media query
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

toggleMode()

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

  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  document.documentElement.style.setProperty('--bg-1', bg1Dark)
  document.documentElement.style.setProperty('--bg-2', bg2Dark)
  document.documentElement.style.setProperty('--text-color', textColorDark)
  document.documentElement.style.setProperty('--grey', greyDark)

  toggleModeBtn.innerHTML = 'LIGHT'
  localStorage.setItem(LOCAL_STORAGE_KEY, 'DARK')
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
  const toggleModeBtn = document.querySelector('.toggle-mode-btn')

  document.documentElement.style.setProperty('--bg-1', bg1Light)
  document.documentElement.style.setProperty('--bg-2', bg2Light)
  document.documentElement.style.setProperty('--text-color', textColorLight)
  document.documentElement.style.setProperty('--grey', greyLight)

  toggleModeBtn.innerHTML = 'DARK'
  localStorage.setItem(LOCAL_STORAGE_KEY, 'LIGHT')
}

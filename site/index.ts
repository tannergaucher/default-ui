import '../index.css'
import './local.css'

import { useProgressiveEnhancements } from '../package/ts/progressive-enhancements'
import { useTheme } from '../package/ts/theme'

useProgressiveEnhancements()
useTheme()

const accent1Picker =
  document.querySelector<HTMLInputElement>('#accent-1-input')

accent1Picker?.addEventListener('input', (event: any) => {
  const accent1 = event.target.value
  document.documentElement.style.setProperty('--accent-1', accent1)

  //   also persist to local storage

  //   const currentMode = localStorage.getItem(THEME_STORAGE_KEY) as Mode
})

const accent2Picker =
  document.querySelector<HTMLInputElement>('#accent-2-input')

accent2Picker?.addEventListener('input', (event: any) => {
  const accent2 = event.target.value
  document.documentElement.style.setProperty('--accent-2', accent2)
})

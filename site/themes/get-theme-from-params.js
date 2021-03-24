import 'regenerator-runtime/runtime'
import { LOCAL_STORAGE_KEY } from '../../package/utils/constants'
import { setDarkTheme, setLightTheme } from '../../package/modes/set-theme'

getThemeFromParams()

async function getThemeFromParams() {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString)
  const themeFromParam = params.get('theme')

  if (!themeFromParam) return

  let dynamicTheme

  if (themeFromParam === `uniswap`) {
    dynamicTheme = await import('./uniswap')
  }

  if (themeFromParam === `consensys`) {
    dynamicTheme = await import('./consensys')
  }

  if (themeFromParam === `spotify`) {
    dynamicTheme = await import('./spotify')
  }

  if (themeFromParam === `coinbase`) {
    dynamicTheme = await import('./coinbase')
  }

  if (themeFromParam === `amazon`) {
    dynamicTheme = await import('./amazon')
  }

  if (themeFromParam === `apple`) {
    dynamicTheme = await import('./apple')
  }

  // also need to set persisted dynamic theme
  const persistedDynamicTheme = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (persistedDynamicTheme === 'DARK') {
    setDarkTheme()
  }

  if (persistedDynamicTheme === 'LIGHT') {
    setLightTheme()
  }

  if (dynamicTheme && dynamicTheme.imgSrc) {
    const images = document.querySelectorAll('img')
    images.forEach((image) => (image.src = dynamicTheme.imgSrc))
  }

  if (dynamicTheme && dynamicTheme.title) {
    const titles = document.querySelectorAll('.brand-title')
    titles.forEach(
      (title) =>
        (title.innerHTML = `${title.innerHTML} X ${dynamicTheme.title}`)
    )

    document.title = `${document.title} X ${dynamicTheme.title}`
  }

  document.querySelectorAll('a').forEach((anchor) => {
    anchor.href = anchor.href + window.location.search
  })
}

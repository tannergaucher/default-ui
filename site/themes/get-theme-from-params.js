import 'regenerator-runtime/runtime'

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

    console.log(`dynamicTheme`, dynamicTheme)
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

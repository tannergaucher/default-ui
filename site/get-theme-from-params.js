import 'regenerator-runtime/runtime'

async function getThemeFromParams() {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString)
  const themeFromParam = params.get('theme')

  let dynamicTheme

  if (themeFromParam === `uniswap`) {
    dynamicTheme = await import('./themes/uniswap')
  }

  if (themeFromParam === `consensys`) {
    dynamicTheme = await import('./themes/consensys')
  }

  if (themeFromParam === `spotify`) {
    dynamicTheme = await import('./themes/spotify')
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
  }

  document.querySelectorAll('a').forEach((anchor) => {
    anchor.href = anchor.href + window.location.search
  })
}

getThemeFromParams()

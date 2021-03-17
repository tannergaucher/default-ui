import 'regenerator-runtime/runtime'

async function getThemeFromParams() {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString)
  const theme = params.get('theme')
  const images = document.querySelectorAll('img')

  //   Import styles
  if (theme === `uniswap`) {
    const dynamicTheme = await import('./themes/uniswap')

    images.forEach((image) => (image.src = dynamicTheme.imgSrc))
  }
}

getThemeFromParams()

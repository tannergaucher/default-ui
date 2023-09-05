export default function handleDetailsClose() {
  const detailsMenu = document.querySelector('#details-menu')

  if (detailsMenu) {
    document.addEventListener('click', function (e) {
      if (!detailsMenu.contains(e.target)) {
        detailsMenu.removeAttribute('open')
      }
    })
  }
}

handleDetailsClose()

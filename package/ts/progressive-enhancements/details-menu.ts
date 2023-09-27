export function handleDetailsClose() {
  const detailsMenu = document.querySelector('#details-menu')

  if (detailsMenu) {
    document.addEventListener('click', function (e) {
      if (!detailsMenu.contains(e.target as Node)) {
        detailsMenu.removeAttribute('open')
      }
    })
  }
}

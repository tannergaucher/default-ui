const detailsMenu = document.querySelector('#details-menu')

document.addEventListener('click', function (e) {
  if (!detailsMenu.contains(e.target)) {
    detailsMenu.removeAttribute('open')
  }
})

export default {}

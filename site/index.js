const exampleDialogBtn = document.querySelector('#show-dialog-example-btn')
const exampleDialog = document.querySelector('#dialog-example')

exampleDialogBtn.addEventListener('click', handleDialogBtnClick)

if (exampleDialog.showModal !== 'function') {
  exampleDialog.style.display = 'none'
}

function handleDialogBtnClick() {
  if (typeof exampleDialog.showModal === 'function') {
    exampleDialog.showModal()
  } else {
    alert('The <dialog> API is not supported by this browser')
  }
}

const exampleDialogBtn = document.querySelector('#show-dialog-example-btn')
const exampleDialog = document.querySelector('#dialog-example')
const typeScaleSelect = document.querySelector('#type-scale-select')
const textBaseSelect = document.querySelector('#text-base-select')
const accent1LightInput = document.querySelector('#accent-1-light-input')
const accent1DarkInput = document.querySelector('#accent-1-dark-input')
const accent2LightInput = document.querySelector('#accent-2-light-input')
const accent2DarkInput = document.querySelector('#accent-2-dark-input')
const toggleModeBtn = document.querySelector('.toggle-mode-btn')

window.addEventListener('load', setInitAccent1Light)
window.addEventListener('load', setInitAccent1Dark)
window.addEventListener('load', setInitAccent2Light)
window.addEventListener('load', setInitAccent2Dark)

exampleDialogBtn.addEventListener('click', handleDialogBtnClick)
typeScaleSelect.addEventListener('change', handleTypeScaleChange)
textBaseSelect.addEventListener('change', handleTextBaseSelect)
accent1LightInput.addEventListener('change', handleAccent1LightChange)
accent1DarkInput.addEventListener('change', handleAccent1DarkChange)
accent2LightInput.addEventListener('change', handleAccent2LightChange)
accent2DarkInput.addEventListener('change', handleAccent2DarkChange)

if (typeof exampleDialog.showModal !== 'function') {
  exampleDialog.style.display = 'none'
}

function handleDialogBtnClick() {
  if (typeof exampleDialog.showModal === 'function') {
    exampleDialog.showModal()
  } else {
    alert('The <dialog> API is not supported by this browser')
  }
}

function handleTypeScaleChange(e) {
  document.documentElement.style.setProperty(
    '--text-scale-ratio',
    e.target.value
  )
}

function handleTextBaseSelect(e) {
  const responsiveUnit = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--responsive-unit')

  document.documentElement.style.setProperty(
    '--text-baseline',
    `calc(${responsiveUnit} + ${e.target.value}rem)`
  )
}

function setInitAccent1Light() {
  const val = getComputedStyle(document.documentElement).getPropertyValue(
    '--accent-1-light'
  )

  accent1LightInput.value = val.trim()
}

function setInitAccent1Dark() {
  const val = getComputedStyle(document.documentElement).getPropertyValue(
    '--accent-1-dark'
  )

  accent1DarkInput.value = val.trim()
}

function setInitAccent2Light() {
  const val = getComputedStyle(document.documentElement).getPropertyValue(
    '--accent-2-light'
  )

  accent2LightInput.value = val.trim()
}

function setInitAccent2Dark() {
  const val = getComputedStyle(document.documentElement).getPropertyValue(
    '--accent-2-dark'
  )

  accent2DarkInput.value = val.trim()
}

function handleAccent1LightChange(e) {
  document.documentElement.style.setProperty('--accent-1-light', e.target.value)

  if (toggleModeBtn.innerHTML === 'DARK') {
    document.documentElement.style.setProperty('--accent-1', e.target.value)
  }
}

function handleAccent1DarkChange(e) {
  document.documentElement.style.setProperty('--accent-1-dark', e.target.value)

  if (toggleModeBtn.innerHTML === 'LIGHT') {
    document.documentElement.style.setProperty('--accent-1', e.target.value)
  }
}

function handleAccent2LightChange(e) {
  document.documentElement.style.setProperty('--accent-2-light', e.target.value)

  if (toggleModeBtn.innerHTML === 'DARK') {
    document.documentElement.style.setProperty('--accent-2', e.target.value)
  }
}

function handleAccent2DarkChange(e) {
  document.documentElement.style.setProperty('--accent-2-dark', e.target.value)

  if (toggleModeBtn.innerHTML === 'LIGHT') {
    document.documentElement.style.setProperty('--accent-2', e.target.value)
  }
}

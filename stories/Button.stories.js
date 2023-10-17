import '../package/index.css'

export default {
  title: 'Button',
}

export const Primary = {
  render() {
    const button = document.createElement('button')
    button.innerText = 'Primary'
    button.type = 'submit'

    return button
  },
}

export const PrimaryDisabled = {
  render() {
    const button = document.createElement('button')
    button.innerText = 'Primary Disabled'
    button.type = 'submit'
    button.disabled = true

    return button
  },
}

export const SecondaryButton = {
  render() {
    const button = document.createElement('button')
    button.innerText = 'Secondary'
    button.type = 'button'

    return button
  },
}

export const SecondaryDisabled = {
  render() {
    const button = document.createElement('button')
    button.innerText = 'Secondary Disabled'
    button.type = 'button'
    button.disabled = true

    return button
  },
}

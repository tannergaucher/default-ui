import '../index.css'

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

export const Secondary = {
  render() {
    const button = document.createElement('button')
    button.innerText = 'Secondary'

    return button
  },
}

export const SecondaryDisabled = {
  render() {
    const button = document.createElement('button')
    button.innerText = 'Secondary Disabled'
    button.disabled = true

    return button
  },
}

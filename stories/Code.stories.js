import '../index.css'

export default {
  title: 'Code',
}

export const Default = {
  render() {
    const code = document.createElement('code')

    code.innerText = 'npm i semantic-styles'

    return code
  },
}

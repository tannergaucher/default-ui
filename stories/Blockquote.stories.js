import '../index.css'

export default {
  title: 'Blockquote',
}

export const Default = {
  render() {
    const blockquote = document.createElement('blockquote')
    blockquote.innerText = 'This is a blockquote'

    return blockquote
  },
}

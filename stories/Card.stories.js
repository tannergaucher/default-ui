import '../index.css'

export default {
  title: 'Card',
}

export const Default = {
  render() {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardHeading = document.createElement('h3')
    cardHeading.classList.add('card-heading')
    cardHeading.innerText = 'Card Header'

    const cardImage = document.createElement('img')
    cardImage.classList.add('card-image')
    cardImage.src = 'https://source.unsplash.com/random/300x200'

    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerText = 'This is card text'

    card.appendChild(cardImage)
    card.appendChild(cardHeading)
    card.appendChild(cardText)

    return card
  },
}

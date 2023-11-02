const quotes = [
  "Hey, I'm Tanner",
  'Nice to meet you!',
  'I like building things for the web',
  'undefined',
  'Hah, i bet you thought that was a bug!',
  'I just wrote "undefined" there as a joke.',
  'Ha ha',
]

const avatarQuoteContainer = document.querySelector('.avatar-quote-container')

if (!avatarQuoteContainer) {
  throw new Error('Could not find avatar-quote-container')
}

const initialQuote = document.createElement('blockquote')

initialQuote.classList.add('avatar-quote')
initialQuote.setAttribute('avatar-quote-number', '1')
initialQuote.setAttribute('current-quote', 'true')
initialQuote.innerText = quotes[0]

avatarQuoteContainer.appendChild(initialQuote)

setInterval(() => {
  const avatarQuotes = avatarQuoteContainer.querySelectorAll('.avatar-quote')

  if (avatarQuotes.length === 0) {
    throw new Error('Could not find any avatar quotes')
  }

  const currentQuote = avatarQuotes[avatarQuotes.length - 1]
  let nextQuoteIndex = quotes.indexOf(currentQuote.innerHTML) + 1
  const nextQuote = document.createElement('blockquote')

  if (nextQuoteIndex >= quotes.length) {
    const allQuotes = document.querySelectorAll('.avatar-quote')
    allQuotes.forEach((quote) => quote.remove())
    nextQuoteIndex = 0
  }

  nextQuote.classList.add('avatar-quote')
  nextQuote.setAttribute('avatar-quote-number', `${nextQuoteIndex + 1}`)

  const allQuotes = document.querySelectorAll('.avatar-quote')
  allQuotes.forEach((quote) => quote.removeAttribute('current-quote'))

  nextQuote.setAttribute('current-quote', 'true')
  nextQuote.innerText = quotes[nextQuoteIndex]
  avatarQuoteContainer?.appendChild(nextQuote)
}, 1900)

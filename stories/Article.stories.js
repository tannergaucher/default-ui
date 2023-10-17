import '../package/index.css'

export default {
  title: 'Article',
}

export const ContentArticle = {
  render() {
    const article = document.createElement('article')

    const articleImage = document.createElement('img')

    articleImage.src = 'https://source.unsplash.com/random/'

    const articleHeading = document.createElement('h1')

    articleHeading.innerText = 'Article Heading'

    const articleSubheading = document.createElement('h2')

    articleSubheading.innerText = 'Article Subheading'

    const articleParagraph1 = document.createElement('p')

    articleParagraph1.innerText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet ligula non sem lacinia, ac bibendum mi venenatis. Sed vitae hendrerit purus. Morbi volutpat, elit id varius aliquam, est mi dapibus metus, et egestas justo ex a tellus. Sed euismod magna non orci viverra, eget pharetra tellus sodales. Nullam varius, urna et congue ultrices, ex dolor sodales mi, ut viverra purus quam at elit. Donec auctor vestibulum urna, nec condimentum tortor laoreet vel. Nam a augue et purus pharetra egestas. Nulla facilisi.'

    const articleParagraph2 = document.createElement('p')

    articleParagraph2.innerText =
      'Nulla facilisi. Donec euismod, eros quis tincidunt molestie, massa metus aliquam diam, vitae dapibus velit nunc eget nunc. Sed auctor, nunc vitae tincidunt aliquet, ipsum tortor volutpat massa, ut ultrices diam nisl eu nisl. Nulla facilisi. Nulla facilisi. Donec euismod, eros quis tincidunt molestie, massa metus aliquam diam, vitae dapibus velit nunc eget nunc. Sed auctor, nunc vitae tincidunt aliquet, ipsum tortor volutpat massa, ut ultrices diam nisl eu nisl. Nulla facilisi.'

    article.appendChild(articleImage)
    article.appendChild(articleHeading)
    article.appendChild(articleSubheading)
    article.appendChild(articleParagraph1)
    article.appendChild(articleParagraph2)

    return article
  },
}

export const CardArticle = {
  render() {
    const cardArticle = document.createElement('article')

    const cardArticleImage = document.createElement('img')

    cardArticleImage.src = 'https://source.unsplash.com/random/'

    const cardArticleHeading = document.createElement('h2')

    cardArticleHeading.innerText = 'Article Heading'

    const cardArticleParagraph = document.createElement('p')

    cardArticleParagraph.innerText =
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'

    cardArticle.appendChild(cardArticleImage)
    cardArticle.appendChild(cardArticleHeading)
    cardArticle.appendChild(cardArticleParagraph)

    return cardArticle
  },
}

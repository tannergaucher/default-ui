import { Primary as Card } from './card.stories'

export default {
  title: 'Layout/Content-Grid',
}

const Template = ({ cards }) => {
  return `
     <div class="content-grid">
          ${cards.join('')}
     </div>
     `
}

export const Primary = Template.bind({})

Primary.args = {
  cards: [
    Card({
      heading: 'Card Heading',
      text: 'Card Text',
      src: `https://source.unsplash.com/random`,
    }),
    Card({
      heading: 'Card Heading',
      text: 'Card Text',
      src: `https://source.unsplash.com/random`,
    }),
    Card({
      heading: 'Card Heading',
      text: 'Card Text',
      src: `https://source.unsplash.com/random`,
    }),
    Card({
      heading: 'Card Heading',
      text: 'Card Text',
      src: `https://source.unsplash.com/random`,
    }),
    Card({
      heading: 'Card Heading',
      text: 'Card Text',
      src: `https://source.unsplash.com/random`,
    }),
    Card({
      heading: 'Card Heading',
      text: 'Card Text',
      src: `https://source.unsplash.com/random`,
    }),
  ],
}

export default {
  title: 'Component/Card',
}

const Template = ({ heading, text, src }) => {
  return `
  <div class="card">
     <img class="card-image" src="${src}"/>
     <h2 class="card-heading">${heading}</h2>
     <p class="card-text">${text}</p>
  </div>
  `
}

export const Primary = Template.bind({})

Primary.args = {
  heading: `Card Heading`,
  text: `Card text`,
  src: 'https://source.unsplash.com/random',
}

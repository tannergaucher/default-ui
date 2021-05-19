export default {
  title: 'Element/Blockquote',
  argTypes: {},
}

const Template = ({ text, ...args }) => {
  return `
     <blockquote class="blockquote" type="text" className="input">${text}</blockquote>
     `
}

export const Primary = Template.bind({})

Primary.args = {
  text: 'Blockquote text...',
}

export default {
  title: 'Element/Input',
  argTypes: {},
}

const Template = ({ label, ...args }) => {
  return `
  <input class="input" type="text" className="input" placeholder="${label}" />
  `
}

export const Primary = Template.bind({})

Primary.args = {
  label: 'Input',
}

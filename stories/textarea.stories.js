export default {
  title: 'Element/Textarea',
  argTypes: {},
}

const Template = ({ label, ...args }) => {
  return `
     <textarea class="input" type="text" className="input" placeholder="${label}" />
     `
}

export const Primary = Template.bind({})

Primary.args = {
  label: 'Input',
}

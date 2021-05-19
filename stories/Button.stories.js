export default {
  title: 'Element/Button',
  argTypes: {
    primary: { control: 'boolean' },
  },
}

const Template = ({ label, ...args }) => {
  return `
  <button class="${args.primary ? `btn btn-primary` : `btn`}">
     ${label}
  </button>`
}

export const Primary = Template.bind({})

Primary.args = {
  label: 'Button',
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  primary: false,
}

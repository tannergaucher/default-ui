export default {
  title: 'Element/Button',
  argTypes: {
    label: { control: 'text' },
    classes: { control: 'text' },
  },
}

const Template = ({ label, classes }) => {
  return `
  <button class="${classes}">
     ${label}
  </button>`
}

export const Primary = Template.bind({})

Primary.args = {
  label: 'Button',
  classes: 'btn btn-primary',
}

export const PrimaryHover = Template.bind({})
PrimaryHover.args = {
  label: 'Button',
  classes: 'btn btn-primary btn-primary--hover',
}

export const PrimaryFocus = Template.bind({})
PrimaryFocus.args = {
  label: 'Button',
  classes: 'btn btn-primary btn-primary--focus',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  label: 'Button',
  classes: 'btn btn-primary btn-primary--disabled',
}

export const Secondary = Template.bind({})

Secondary.args = {
  label: 'Button',
  classes: 'btn',
}

export const SecondaryHover = Template.bind({})

SecondaryHover.args = {
  label: 'Button',
  classes: 'btn btn--hover',
}

export const SecondaryFocus = Template.bind({})

SecondaryFocus.args = {
  label: 'Button',
  classes: 'btn btn--focus',
}

export const SecondaryDisabled = Template.bind({})

SecondaryDisabled.args = {
  label: 'Button',
  classes: 'btn btn--disabled',
}

import { Button } from './Button'

import '../package/index.css'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // title: Button,
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Submit = {
  args: {
    type: 'submit',
    disabled: false,
  },
}

export const SubmitDisabled = {
  args: {
    type: 'submit',
    disabled: true,
  },
}

export const Secondary = {
  args: {
    type: 'button',
    disabled: false,
  },
}

export const SecondaryDisabled = {
  args: {
    type: 'button',
    disabled: true,
  },
}

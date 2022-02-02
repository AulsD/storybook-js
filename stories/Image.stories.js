import { createImage } from './Image';

export default {
  title: 'Example/Image',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createImage({ label, ...args });
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Large.args = {
  large: true,
  label: 'Image',
};

export const small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Image',
};

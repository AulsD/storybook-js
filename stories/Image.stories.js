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

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Image',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Image',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Image',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Image',
};

import { createText } from './TextForm'


export default {
  title: 'Example/TextForm',
  argTypes: {
    onLogin: { action: 'onLogin' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => createText(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};
/*
export const LoggedOut = Template.bind({});
LoggedOut.args = {};*/

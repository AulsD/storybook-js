import './text.css';

export const createText = ({label}) =>  {
  const text = document.createElement('input');
  text.type = 'text';
  text.name = label

  return text;
}

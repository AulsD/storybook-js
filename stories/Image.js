import './image.css';

export const createImage = ({
  size = 'medium',
  backgroundColor,
  src,
  label
}) => {
	const img = document.createElement("img")
	img.type = 'img';
  img.src = 'https://place-hold.it/200x200';
  img.innerText = label;
  
  img.className = ['storybook-img', `storybook-img--${size}`].join(' ');

  img.style.backgroundColor = backgroundColor;

  return img
}

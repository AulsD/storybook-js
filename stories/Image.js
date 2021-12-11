import './image.css';

export const createImage = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label
}) => {
	const img = document.createElement("img")
	img.type = 'Image';
  img.innerText = label;
  
  const mode = primary ? 'storybook-img--primary' : 'storybook-img--secondary';
  img.className = ['storybook-img', 'storybook-img--${size}', mode].join(' ');

  img.style.backgroundColor = backgroundColor;

  return img
}

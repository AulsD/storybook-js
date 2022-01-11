import './header.css';
import { createButton } from './Button';

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const logo = `<div>
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF" />
      </g>
    </svg>
    <h1>Laundbee</h1>
  </div>`;

  wrapper.insertAdjacentHTML('afterbegin', logo);

  const account = document.createElement('div');
  if (user) {
    account.appendChild(createButton({ size: 'small', label: 'Log out', onClick: onLogout }));
  } else {
    account.appendChild(createButton({ size: 'small', label: 'Log in', onClick: onLogin }));
    account.appendChild(
      createButton({
        size: 'small',
        label: 'Sign up',
        onClick: onCreateAccount,
        primary: true,
      })
    );
  }
  wrapper.appendChild(account);
  header.appendChild(wrapper);

  return header;
};

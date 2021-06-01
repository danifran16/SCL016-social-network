import { login } from './views/templateLogin.js';
import { register } from './views/templateRegister.js';
import { post } from './views/templateHome.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/login':
      containerRoot.appendChild(login());
      break;
    case '#/register':
      containerRoot.appendChild(register());
      break;
    case '#/home':
      containerRoot.appendChild(post());
      break;
    case '#/':
      login();
      break;
    default:
      containerRoot.innerHTML = '<h2>Error</h2>';
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  }
  if (hash === '#/login') {
    return showTemplate(hash);
  }
  if (hash === '#/register') {
    return showTemplate(hash);
  }
  if (hash === '#/home') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

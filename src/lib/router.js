import { login } from './views/templateLogin.js';
import { register } from './views/templateRegister.js';
import { post } from './views/templateHome.js';
import { errorPage } from './views/templateError.js';

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
      containerRoot.appendChild(login());
      break;
    default:
      containerRoot.appendChild(errorPage());
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/login') {
    return showTemplate(hash);
  }
  if (hash === '#/register') {
    return showTemplate(hash);
  }
  if (hash === '#/home') {
    return showTemplate(hash);
  }
  if (hash === '#/') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

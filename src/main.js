import { changeRoute } from './lib/router.js';

const init = () => {
  window.addEventListener('hashchange', () => {
    // myFunction();
    changeRoute(window.location.hash);
  });
  window.location.hash = '#/login';
};
const app = firebase.app();
// eslint-disable-next-line no-console
console.log(app);
window.addEventListener('load', init);
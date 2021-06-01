import { changeRoute } from './lib/router.js';

const init = () => {
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
  window.location.hash = '#/login';
};
const app = firebase.app();
console.log(app);
window.addEventListener('load', init);
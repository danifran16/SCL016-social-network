// Este es el punto de entrada de tu aplicacion
// import { myFunction } from "./index.js";
import { changeRoute } from './lib/router.js';

const init = () => {
  window.addEventListener('hashchange', () => {
    // myFunction();
    changeRoute(window.location.hash);
  });
  window.location.hash = '#/login';
};
const app = firebase.app();
console.log(app);
window.addEventListener('load', init);

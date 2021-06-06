import { createPost, showPost, signOff } from '../firebase.js';

export const post = () => {
const divCreate = document.createElement('div');
const viewCreate = `
<div class="contenedor">
  <div class="header-nav_home">
    <div>
      <img class="logo-home" src="./imagen/logo_wup.jpg">
    </div>
    <div>
      <h2>Bienvenido a WordUp</h2>
      <p>¡Comienza a Practicar!</p>
    </div>
    <div>
      <select class="buttons-nav" name="Elige tu Idioma" id="selectLang">
        <option value="español">Español</option>
        <option value="ingles">Ingles</option>
        <option value="frances">Frances</option>
        <option value="aleman">Aleman</option>
      </select>
    </div>
  </div>
  <div>
    <button type="button" id="buttonLogOut" class="buttons-nav2"></button>
    <p class="glyphicon glyphicon-log-out">Log out</p>
  </div>
  <div class="formPost">
    <textarea id="postNew" class="post-new" placeholder="Escribe tu Post"></textarea>
    <button id="saveButton" class="button-2">WordUpear</button>
  </div>
  <div class="get-post" id="getPost"></div>
</div>
`;

divCreate.innerHTML = viewCreate;

const newPost = divCreate.querySelector('#saveButton');

newPost.addEventListener('click', () => {
const inputPost = divCreate.querySelector('#postNew').value;
createPost(inputPost);
showPost(inputPost);
});

// Para cerrar sesion
const logOut = divCreate.querySelector('#buttonLogOut');
logOut.addEventListener('click', () => {
signOff();
});

return divCreate;
};

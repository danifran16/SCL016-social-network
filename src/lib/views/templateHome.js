import { createPost, showPost, signOff } from '../firebase.js';

export const post = () => {
const divCreate = document.createElement('div');
const viewCreate = `
<div class="home">

  <div class="nav-home">

    <div>
      <img class="logo-home" src="./imagen/logo_wup.jpg">
    </div>

    <div class="select-nav">
      <select class="buttons-nav" name="Elige tu Idioma" id="selectLang">
        <option value="español">Español</option>
        <option value="ingles">Ingles</option>
        <option value="frances">Frances</option>
        <option value="aleman">Aleman</option>
      </select>
    </div>

    <div class="div-logOut">
      <button type="button" id="buttonLogOut" class="button-logOut">
        <span class="glyphicon glyphicon-log-out"> Log out</span>
    </div>

  </div>

  <div class="feed">

    <div class="header-feed">
      <h3>Bienvenido a WordUp<h3>
          <h4>¡Comienza a Practicar!<h4>
    </div>

    <div class="feed-post">

      <div class="form-post">
        <textarea id="postNew" class="post-new" placeholder="Escribe tu Post"></textarea>
        <button id="saveButton" class="button-WUP">WordUpear</button>
      </div>

      <div class="get-post" id="getPost"></div>
    </div>
  </div>

</div>
`;

divCreate.innerHTML = viewCreate;

const newPost = divCreate.querySelector('#saveButton');

newPost.addEventListener('click', () => {
const inputPost = divCreate.querySelector('#postNew').value;
createPost(inputPost);
showPost(inputPost);
// // const showNewPost = divCreate.querySelector('#getPost');
// // showNewPost.addEventListener('click', () => {
// // showPost(inputPost);
// });
});

// Para cerrar sesion
const logOut = divCreate.querySelector('#buttonLogOut');
logOut.addEventListener('click', () => {
signOff();
});

return divCreate;
};
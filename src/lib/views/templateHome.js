import { createPost, showPost, signOff } from '../firebase.js';

export const post = () => {
  const divCreate = document.createElement('div');
  const viewCreate = `
  <div class = "contenedor">
    <div>
    <img class="logo-home" src="./imagen/logo_wup.jpg">
    </div>
        <h1>Bienvenido a WordUp<h1>
        <h1>¡Comienza a Practicar!<h1>
    <nav>
    <select class="buttons-nav" name="Elige tu Idioma" id="selectLang">
      <option value="español">Español</option>
      <option value="ingles">Ingles</option>
      <option value="frances">Frances</option>
      <option value="aleman">Aleman</option>
    </select>
    <button type="button" id="buttonLogOut" class="buttons-nav2">
    <span class="glyphicon glyphicon-log-out"></span> Log out
    </nav>
  <form id="taskForm">
      <div class="formPost">
        <textarea id="postNew" class="post-new" placeholder="Escribe tu Post"></textarea>
        <button id="saveButton" class="button-2">WordUpear</button> 
      </div>  

  </form> 
        <div class="get-post" id="getPost"></div>
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
    // //   showPost(inputPost);
    // });
  });

  // Para cerrar sesion
  const logOut = divCreate.querySelector('#buttonLogOut');
  logOut.addEventListener('click', () => {
    signOff();

    </form> 
    <div id="getPost"></div>
</div>
`;
  divCreate.innerHTML = viewCreate;

  const newPost = divCreate.querySelector('#saveButton');
  // const mostrarPost = document.getElementById('getPost');

  newPost.addEventListener('click', () => {
    const inputPost = divCreate.querySelector('#postNew').value;

    // nuevoPost.innerHTML += '';
    createPost(inputPost);
    showPost(inputPost);
    // const showNewPost = divCreate.querySelector('#getPost');
    // showNewPost.addEventListener('click', () => {
    //   showPost(inputPost);
    // });

  });

  return divCreate;
};

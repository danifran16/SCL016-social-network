import { createPost } from '../firebase.js';

export const post = () => {
  const divCreate = document.createElement('div');
  const viewCreate = `
  <div>
      <img class="logo-home" src="./imagen/logo_wup.jpg">
    </div>
    <div class = "contenedor">

    <h1>Bienvenido a WordUp<h1>
    <h1>¡Comienza a Practicar!<h1>
  <nav>
      <select class="buttons-nav" name="Elige tu Idioma" id="selectLang">
        <option value="español">Español</option>
        <option value="ingles">Ingles</option>
        <option value="frances">Frances</option>
        <option value="aleman">Aleman</option>
      </select>
    <button type="button" class="buttons-nav">
    <span class="glyphicon glyphicon-log-out"></span> Log out
  </nav>
    
  <form id="taskForm">

      <div class="formPost">
        <textarea id="postNew" class="post-new" placeholder="Escribe tu Post"></textarea>
        <button id="saveButton" class="button-2">WordUpear</button> 
      </div>  

    </form>   

</div>
`;
  divCreate.innerHTML = viewCreate;

  const newPost = divCreate.querySelector('#saveButton');
  newPost.addEventListener('click', () => {
    const inputPost = divCreate.querySelector('#postNew').value;
    createPost(inputPost);
  });
  return divCreate;
};

// // PARA PINTAR EN PANTALLA
// window.addEventListener('DOMContentLoaded', async (e) => {
//   const querySnapshot = await getPosts();
//   querySnapshot.forEach((doc) => {

// }

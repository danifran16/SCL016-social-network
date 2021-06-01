// import { createPost } from '../firebase.js';

console.log('estoy aca');

export const post = () => {
  const divCreate = document.createElement('div');
  const viewCreate = `
  <div class = "container-home">
  <h1>Bienvenido a WordUp, Comienza a Practicar!<h1>
    <nav>
     
      <select class="buttons-nav" name="Elige tu Idioma" id="selectLang">
          <option value="español">Español</option>
          <option value="ingles">Ingles</option>
          <option value="frances">Frances</option>
          <option value="aleman">Aleman</option>
        </select>
        <button type="button" class="btn btn-default btn-sm">
        <span class="glyphicon glyphicon-log-out"></span> Log out
    </nav>
        </div>
       
   <div id="idCreateContainer" class= "div-container-post">
        <input type="textfield" id="postNew"/>
        <button id="saveButton">Publicar<button> 
    <div >
      <input type="text"/>
  </div>
 </div>
`;
  divCreate.innerHTML = viewCreate;

  const newPost = divCreate.querySelector('#saveButton');
  newPost.addEventListener('click', () => {
    const inputPost = divCreate.querySelector('#postNew').value;

    idCreateContainer.reset();
    createPost(inputPost);
  });
  return divCreate;
};

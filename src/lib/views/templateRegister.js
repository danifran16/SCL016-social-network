import { userNew } from '../firebase.js';

export const register = () => {
  const divRegister = document.createElement('div');
  const viewRegister = `
    <form id="signup-form" class="formulario">
      <a href="#/login">
        <i id="arrow" class="fas fa-chevron-left"></i>
      </a>
      <div>
        <img class="logo" src="./imagen/logo_wup.jpg">
      </div>
      <div class="contenedor">
        <p>Regístrate con tu E-mail:</p>
        <div class="input-contenedor">
          <i class="fas fa-envelope icon"></i>
          <input class="input-init" type="email" id="signup-email" autocomplete="on" placeholder="E-mail" value="" required>
        </div>
        <div class="input-contenedor">
          <i class="fas fa-key icon"></i>
          <input class="input-init" type="password" id="signup-password" placeholder="Contraseña"
            oninvalid="setCustomValidity('Tu contraseña debe tener min. 6 caracteres')" value="" required>
        </div>
        <div class="input-contenedor">
        <input id="btn-register" type="submit" value="Registrarse" class="button">
        <div class="input-contenedor">
        <p class="mess-user"></p>
          <input id="btn-register" type="submit" value="Registrarse" class="button">
        </div>
        <p>Ya estás registrado?<a href="#/login"> Inicia sesión aquí</a></p>
        <p class="mess-user">Eleva tu Nivel</p>
        <p class="mess-user">Crea Comunidad</p>
        <p class="mess-user>Comparte Conocimiento</p>
      </div>
    </form>
    `;
  divRegister.innerHTML = viewRegister;
  const signupForm = divRegister.querySelector('#signup-form');
  
  // id formulario de registro
  const btnRegister = divRegister.querySelector('#btn-register');
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault(); // para cancelar el evento del reinicio del formulario
    // const signupUserName = document.querySelector('#singup-username').value;
    const signupEmail = divRegister.querySelector('#signup-email').value;
    const signupPassword = divRegister.querySelector('#signup-password').value;
    // const signupPassword2 = document.querySelector('#signup-password2').value;
    userNew(signupEmail, signupPassword);
    // Limpiar el form
    signupForm.reset();
  });
  return divRegister;
};

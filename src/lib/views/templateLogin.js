import { googleProvider, singIn } from '../firebase.js';

export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = ` 
  <div id="root">
    <div  id="contenedor" class="contenedor">
      <div id="login-form" class="formulario">
        <div>
      <img class="logo" src="./imagen/logo_wup.jpg">
    </div>
    <div class="">
      <p>Login:</p>
      <div class="input-contenedor">
        <i class="fas fa-envelope icon"></i>
        <input class="input-init" type="email" id="login-email" placeholder="Correo Electronico">
      </div>
      <div class="input-contenedor">
        <i class="fas fa-key icon"></i>
        <input class="input-init" type="password" id="login-password" placeholder="Contraseña">
      </div>
      <div>
        <input type="button" value="Ingresa" class="button" id="buttonSignIn">
      </div>
    </div>
  </div>
  <div class="formulario-2">
    <div class="input-contenedor-google">
      <div>
      </div>
      <button id="login-google" class="btn-google">Click Aquí</button>
      <img class="google-icons" src="./imagen/google.png">
    </div>
    <div>
      <p>You do not have an account?:</p>
      <a id="btn-register" href="#/register"><button class="check-in">Registrate aquí</button></a>
    </div>
  </div>
</div>`;

  divLogin.innerHTML = viewLogin;
  const googleLogin = divLogin.querySelector('#login-google');
  googleLogin.addEventListener('click', () => {
    googleProvider();
  });

  const regularLogin = divLogin.querySelector('#buttonSignIn');
  regularLogin.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    singIn(email, password);
  });
  return divLogin;
};

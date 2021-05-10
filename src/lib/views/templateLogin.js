import { googleProvider } from '../firebase.js';

export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = ` <div id="root"><div class="contenedor">
  <form id="login-form" class="formulario">
    <div>
      <img class="logo" src="./imagen/logo_wup_peq.jpeg">
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
      <div class="input-contenedor">
        <a href="#/feed"><input type="submit" value="Ingresa" class="button"></a>
      </div>
    </div>
  </form>
  <div class="formulario-2">
    <div class="input-contenedor-google">
     <img class="google-icon" src="./imagen/logo_mail.jpg">
     <button id="login-google" class="btn-google">Ingresa con</button>
     <img class="google-icons" src="./imagen/logo_google.jpg">
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
  })
  return divLogin;
};

import { googleProvider, singIn } from '../firebase.js';

export const login = () => {
const divLogin = document.createElement('div');
const viewLogin = `
<div class="container">

  <div class="login_container">
    
    <div>
      <img class="logo" src="./imagen/logo_wup.jpg"/>
    </div>

    <div class="login_container--div">
      <i class="fas fa-envelope icon"></i>
      <input class="login_container--input" type="email" id="login-email" placeholder="Email"/>
    </div>

    <div class="login_container--div">
      <i class="fas fa-key icon"></i>
      <input class="login_container--input" type="password" id="login-password" placeholder="Password"/>
    </div>

    <div>
      <input type="button" value="LOGIN" class="button-signIn" id="buttonSignIn">
    </div>

    <div class="login_container--google">
      <p>Or sign in with:</p>
      <button id="login-google" class="btn-google">
      <img class="google-icons" src="./imagen/google.png">
      </button>
    </div>

    <div class="login_container--register">
      <p>You do not have an account?:</p>
      <a id="btn-register" href="#/register"><button class="check-in">Sign up</button></a>
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
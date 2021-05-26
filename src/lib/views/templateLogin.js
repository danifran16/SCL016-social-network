import { googleProvider } from '../firebase.js';

export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = ` <div class="login-container">
    <div>
    <form>
      <div>
        <img class="logo-app" src="./imagen/logoApp.png" />
      </div>
      <div class="div-container">
        <i class="fas fa-envelope"></i>
        <input class="div-container__input" type="email" placeholder="Email"/>
      </div>
      <div class="div-container">
        <i class="fas fa-key"></i>
        <input class="div-container__input" type="password" placeholder="Password"/>
      </div>
      <div>
        <a href="#/homeWUP"><input type="submit" value="LOGIN" class="div-container__button"></a>
      </div>
    </form>
    <div class="div-container__register" >
      <p>Or login with:</p>
       <button class="div-container__button--google" id="loginGoogle">
         <i class="fab fa-google"></i>
        </button>
    </div>
    <div class="div-container__register" >
      <p>You do not have an account?:</p>
      <a id="buttonRegister" href="#/register"><button class="div-container__button--signup">Sign up</button></a>
    </div>
  </div>
  </div>`;

  divLogin.innerHTML = viewLogin;
  const googleLogin = divLogin.querySelector('#loginGoogle');
  googleLogin.addEventListener('click', () => {
    googleProvider();
  });
  return divLogin;
};

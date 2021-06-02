export const googleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    // /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.hash = '#/home';
    // ...
  }).catch(() => {
    document.querySelector('.mess-user').innerHTML = 'Intenta nuevamente';
  });
};

// crear cuenta usuario nuevo
export const userNew = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    const user = userCredential.user;
    const database = firebase.firestore();
    document.querySelector('.mess-user').innerHTML = 'Tu cuenta fue creada';
      return database.collection('user').doc(user.uid).set({
        name: username,
        email,
      });
    })
    .catch(() => {
      document.querySelector('.mess-user').innerHTML = 'Intenta nuevamente';
    });
};

// ingresar con cuenta registrada
export const singIn = () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch(() => {
      window.location.hash = '#/error';
    });
};

// //crear post
// export const createPost = (postWordUp) => {
//   db.collection("post").add({

// })
// }
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// })

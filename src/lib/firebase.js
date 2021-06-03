// PARA INGRESAR POR GOOGLE (REVISADO, ESTA BIEN)
export const googleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    const credential = result.credential;
    const token = credential.accessToken;
    const user = result.user;
    window.location.hash = '#/home';
  }).catch(() => {
    window.location.hash = '#/error';
  });
};
// CREAR CUENTA (REVISADO, ESTA BIEN)
export const userNew = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)

    .then((userCredential) => {
      const user = userCredential.user;
      const database = firebase.firestore();
      window.location.hash = '#/login';
      return database.collection('user').doc(user.uid).set({
      });
    })
    .catch(() => {
      window.location.hash = '#/error';
    });
};
// INGRESAR CON CUENTA YA CREADA (DA ERROR, y de inmediato INGRESA AL HOME)
export const singIn = () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/home';
    }).catch(() => {
      window.location.hash = '#/error';
    });
};
// CREAR POST (NO SE PINTA EN PANTALLA, SOLO EN FB)
export const createPost = (postWordUp) => {
  const database = firebase.firestore();
  database.collection('post').add({
    comentario: postWordUp,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// // PINTA POST GUARDADOS EN FS
// export const getPosts = () => database.collection('post').get();

// // // export const savePost = (description) => database.collection('post').doc().set({
// // //   user: firebase.auth().currentUser.email,
// // //   description,
// // // });

// PARA INGRESAR POR GOOGLE (REVISADO, ESTA BIEN)
export const googleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)

  firebase.auth().signInWithPopup(provider)

    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = '#/home';

    })
    .catch(() => {

    }).catch(() => {

      window.location.hash = '#/error';
    });
};

// Inicializando Firestore
const db = firebase.firestore();

// CREAR CUENTA (REVISADO, ESTA BIEN)
export const userNew = (email, password) => {

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/login';
      return db.collection('user').doc(user.uid).set({});

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/login';
      return db.collection('user').doc(user.uid).set({
      });

    })
    .catch(() => {
      window.location.hash = '#/error';
    });
};

// INGRESAR CON CUENTA YA CREADA
export const singIn = (email, password) => {

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)

  firebase.auth().signInWithEmailAndPassword(email, password)

    .then(() => {
      window.location.hash = '#/home';
    })
    .catch(() => {
      window.location.hash = '#/error';
    });
};

// CREAR y guardarPOST (NO SE PINTA EN PANTALLA, SOLO EN FB)
export const createPost = (postWordUp) => {

  db.collection('post')
    .add({
      comentario: postWordUp,
    })

  db.collection('post').add({
    comentario: postWordUp,
  })

    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// PINTAR EN CONSOLA
export const showPost = () => {
  db.collection('post').onSnapshot((querySnapshot) => {
    const nuevo = document.querySelector('#getPost');
    // nuevo.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, doc.data().comentario);
      nuevo.innerHTML += `<div>${doc.data().comentario}</div>`;
    });
  });
};
  
// PARA CERRAR SESION
export const signOff = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.hash = '#/';
    })
    .catch(() => {
      window.location.hash = '#/errorPage';
    });
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.hash = '#/login';
  } else {
    window.location.hash = '#/';
  }
});

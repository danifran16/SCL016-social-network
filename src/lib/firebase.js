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

// INGRESAR CON CUENTA YA CREADA
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

// CREAR y guardarPOST (NO SE PINTA EN PANTALLA, SOLO EN FB)
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

// PINTAR EN PANTALLA
export const showPost = () => {
  const database = firebase.firestore();
  database.collection('post').onSnapshot()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
      });
    });
};

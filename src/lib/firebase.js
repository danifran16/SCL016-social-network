// Autentificacion con Google
export const googleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = '#/home';
    })
    .catch(() => {
      window.location.hash = '#/error';
    });
};

// Crear cuenta usuario nuevo
export const userNew = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/login';
      const database = firebase.firestore();
      return database.collection('user').doc(user.uid).set({});
    }).catch(() => {
      window.location.hash = '#/error';
    });
};

// var user = firebase.auth().currentUser;

// user.sendEmailVerification().then(function() {
//   // Email sent.
// }).catch(function(error) {
//   // An error happened.
// });

// ingresar con cuenta registrada
export const singIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch(() => {
      alert('revisa email o password');
      // .reset();
    });
};

// crear post
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

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
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
};

// ingresar con cuenta registrada
export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  }
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  //crear cuenta usuario nuevo
export const userNew = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    console.log('Registro Exitoso');
    const user = userCredential.user;
  }
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    // ..
    });
};


//crear post
export const createPost = (postWordUp) => {
  db.collection("post").add({
    
})
}
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
})
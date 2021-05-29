// funcion para entrar con google
export const googleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    const credential = result.credential;
    const token = credential.accessToken;
    const user = result.user;
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};
// Funcion para registrarse
export const userNew = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    const user = userCredential.user;
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
//Funcion para crear post
export const createPost = (postWordUp) => {
  db.collection("post").add({
    
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});
};

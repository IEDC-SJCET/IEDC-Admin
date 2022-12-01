//loading scene 
import {OpenLoading ,closeLoading} from "./script/main.js";

window.addEventListener("load", (e) => {
  $("#app").load("../dist/forms/login.html");
  
  function handleForm(event) { event.preventDefault(); } 
  // const loginForm = document.getElementById('loginform');
  // loginForm.addEventListener('submit', logSubmit);
  closeLoading();
});




// firebase init
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
            apiKey: "AIzaSyCNbmkHVo6YAOk69h9OgMGbQJBUlW5xz4c",
            authDomain: "iedc-admin.firebaseapp.com",
            projectId: "iedc-admin",
            // databaseURL: "https://DATABASE_NAME.firebaseio.com",
            storageBucket: "iedc-admin.appspot.com",
            messagingSenderId: "200933316108",
            appId: "1:200933316108:web:8b5d08b6295d0962ec8029"
};
initializeApp(firebaseConfig);

// firebase auth
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
// onAuthStateChanged(auth, user => {
//     if (user) {
//     console.log('user logged in: ', user);
//     $("#app").load("../dist/forms/upload.html");
//     closeLoading();
//   }
//   else {
//     console.log('user logged out');
//     $("#app").load("../dist/forms/login.html");
//     const loginForm = document.getElementById('loginform');
//   if(loginForm){
//     loginForm.addEventListener('submit', logSubmit);
//   }
//   closeLoading();
//   }
// });

// // import { getFirestore, collection, getDocs } from 'firebase/firestore';
// // const db = getFirestore();
// // db.settings({ timestampsInSnapshots: true });
// console.log("hi auth done");
// // login


function logSubmit(event) {
  
  event.preventDefault();
  const loginForm = document.getElementById('loginform');
  console.log("hi auth done");
  // get user info
  const email = loginForm.email.value;
  const password = loginForm.email.value;

  // log the user in
  signInWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log('user logined in:',cred.user);
  })
  .catch((err) => {
    console.log("hi auth no done");
    console.log(err);
  })
}
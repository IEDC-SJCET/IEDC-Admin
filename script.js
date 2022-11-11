
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNbmkHVo6YAOk69h9OgMGbQJBUlW5xz4c",
  authDomain: "iedc-admin.firebaseapp.com",
  projectId: "iedc-admin",
  storageBucket: "iedc-admin.appspot.com",
  messagingSenderId: "200933316108",
  appId: "1:200933316108:web:8b5d08b6295d0962ec8029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
var currentdate = new Date().toLocaleString();

document.getElementById("form").onsubmit = async function (e) {
    
    e.preventDefault();
     const docRef = await addDoc(collection(db, "EVENT"), {
        name: document.getElementById('name').value,
        dateS: document.getElementById('dateS').value,
        link: document.getElementById('link').value,
        dateE: document.getElementById('dateE').value,
        message: document.getElementById('message').value,
        photo: document.getElementById('photo').value,
        time: currentdate
    });
}
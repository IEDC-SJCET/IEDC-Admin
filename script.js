import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore, getDocs, addDoc, collection, orderBy, query } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";

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
const storage = getStorage(app);
const storageRef = ref(storage, 'some-child');

var currentdate = new Date().toLocaleString();

const name = document.getElementById('name').value;
const dateS= document.getElementById('dateS').value;
const link= document.getElementById('link').value;
const dateE= document.getElementById('dateE').value;
const message= document.getElementById('message').value;
// const photo= document.getElementById('photo').value;
const file = document.getElementById("photo").files[0];
const time= currentdate;
  
document.getElementById("form").onsubmit = async function (e) {
    
    e.preventDefault();
     

    uploadBytes(storageRef, file).then((snapshot) => {
    console.log('file uploaded');
    afterPic()
  });
}

function afterPic(){
  const docRef = addDoc(collection(db, "EVENT"), {
        name: name,
        dateS: dateS,
        link: link,
        dateE: dateE,
        message:message,
        time: currentdate
    });

    
}
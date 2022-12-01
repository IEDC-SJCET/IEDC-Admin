# IEDC-Admin

simple admin panel for the IEDC Website

[firebase storate doc](https://stackoverflow.com/questions/70147514/how-do-i-upload-images-to-firebase-with-cdn-and-version-9-5-0)
[firebase storate doc](https://firebase.google.com/docs/storage/web/download-files#download_data_via_url)

### Some Firebase CDN (v5.6.0)

```
<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase-firestore.js"></script>
```

### Start with Firebase

```
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



const firebaseConfig = {
            apiKey: "AIzaSyCNbmkHVo6YAOk69h9OgMGbQJBUlW5xz4c",
            authDomain: "iedc-admin.firebaseapp.com",
            projectId: "iedc-admin",

            storageBucket: "iedc-admin.appspot.com",
            messagingSenderId: "200933316108",

            appId: "1:200933316108:web:8b5d08b6295d0962ec8029"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

```

### New CDN Firebase (v9.14.0)

```
<script type="module">
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js';
    import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore-lite.js';



     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-analytics.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app-check.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-auth.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-functions.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-storage.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-performance.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-remote-config.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-messaging.js";
     import {} from "https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-database.js";


</script>
```

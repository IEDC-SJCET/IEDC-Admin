# IEDC-Admin

### Start with Firebase

```
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
            apiKey: "AIzaSyCNbmkHVo6YAOk69h9OgMGbQJBUlW5xz4c",
            authDomain: "iedc-admin.firebaseapp.com",
            projectId: "iedc-admin",

            storageBucket: "iedc-admin.appspot.com",
            messagingSenderId: "200933316108",

            appId: "1:200933316108:web:8b5d08b6295d0962ec8029"
};

const app = initializeApp(firebaseConfig);

```

### New CDN Firebase (v9.14.0)

```
<script type="module">
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
    import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore-lite.js';



     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app-check.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-functions.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-performance.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-remote-config.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging.js";
     import {} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


</script>
```

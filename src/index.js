// other important funtions
import {OpenLoading ,closeLoading, clearValue} from "./script/main.js";

//for login
import {authINIT} from "./script/login.js";
authINIT();


window.addEventListener("load", (e) => {
  closeLoading();
});



// // import { getFirestore, collection, getDocs } from 'firebase/firestore';
// // const db = getFirestore();
// // db.settings({ timestampsInSnapshots: true });
// console.log("hi auth done");
// // login





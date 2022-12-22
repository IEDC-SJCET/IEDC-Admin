import { addDoc,collection } from "firebase/firestore";
import { DB, storage } from "./login";
import {storageRef} from "firebase/storage";

export const AlertFormJS = () =>{
const onAlertSubmit = document.getElementById('alertform');
const ALERTS = collection(DB,'ALERT');
onAlertSubmit.addEventListener('submit', e => {
    e.preventDefault();
    console.log("before adding doc");


    const storageRef = ref(storage, 'ALERTS/' + onAlertSubmit.dateE.value);
    var timestamp = Number(new Date());
    // var storageRef = firebase.storage().ref(timestamp.toString());
    var file_data = $('alertIMG').prop('file');
    console.log(file_data);
    // storageRef.put(file_data);

    // console.log(URL.createObjectURL(alertIMG.target.files[0]));
    addDoc(ALERTS, {
        link: onAlertSubmit.Alertlink.value,
        expDATE: onAlertSubmit.dateE.value,
    }).then(() => {
        onAlertSubmit.reset();
        console.log("Alert Submited");
        //loading successfulll here

    })
})
}






























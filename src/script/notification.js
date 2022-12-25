import { addDoc, collection } from "firebase/firestore";
import { DB } from "./login";
import { uploadFile } from "./storage";
import { OpenLoading, closeLoading, verifyUPDATE, relativeDATE } from "./main";


const metadata = {
  contentType: 'image/jpeg'
};

var file;
var file_name;
var newURL;

export const AlertFormJS = () => {
    // var onAlertSubmit = $('#formForAlert')[0];
    const onAlertSubmit = document.getElementById('formForAlert');
    const ALERTS = collection(DB,'ALERT');

    onAlertSubmit.addEventListener('submit',e => {
        e.preventDefault();
        OpenLoading();
        console.log("before adding doc");

        uploadFile("ALERT", file, file_name, metadata).then(r => {
            newURL = r;
            addDoc(ALERTS, {
                RedirectLink: onAlertSubmit.Alertlink.value,
                ExpireAt: relativeDATE(onAlertSubmit.dateE.value),
                IMG_URL: newURL,
                UploadTimeStamp: Date.now()
            }).then(() => {
                onAlertSubmit.reset();
                console.log("Alert Submited");
                $("#app").load( "../dist/forms/successfull.html", ()=> {
                    verifyUPDATE(newURL);
                });

            })
        }).catch(e => {
            console.log(e);
            $("#app").load( "../dist/forms/failed.html", ()=> {
                verifyUPDATE('.');
            });
        })
        .finally(()=>{
            closeLoading();
        })
    })


    const alertIMG = document.getElementById("alertIMG");
    alertIMG.addEventListener('change',(e)=>{
        file = e.target.files[0];
        file_name = file.name;
        
    });

}
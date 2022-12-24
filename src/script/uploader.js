import { addDoc, collection } from "firebase/firestore";
import { DB } from "./login";
import { uploadFile } from "./storage";
import { OpenLoading, closeLoading, verifyUPDATE, getCurrentTimestamp } from "./main";


const metadata = {
  contentType: 'image/jpeg'
};

var file;
var file_name;
var newURL;


export const uploader = () => {
    // var onAlertSubmit = $('#formForAlert')[0];
    const uploadform = document.getElementById('uploadform');
    const EVENTS = collection(DB,'EVENTS');

    uploadform.addEventListener('submit',e => {
        e.preventDefault();
        OpenLoading();
        console.log("upLoading IMG");


        uploadFile("EVENTS", file, file_name, metadata).then(r => {
            newURL = r;
            addDoc(EVENTS, {
                name: uploadform.name.value,
                redirect: uploadform.link.value,
                firstDate: uploadform.dateS.value,
                lastDate: uploadform.dateE.value,
                textField: uploadform.message.value,
                fileLINK: newURL,
                timeStamp: getCurrentTimestamp()
            }).then(() => {
                uploadform.reset();
                console.log("Event Submited");
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


    const eventIMG = document.getElementById("eventIMG");
    eventIMG.addEventListener('change',(e)=>{
        file = e.target.files[0];
        file_name = file.name;
        
    });
}
















        
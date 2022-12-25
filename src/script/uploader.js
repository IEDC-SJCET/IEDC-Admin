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
                EventName: uploadform.name.value,
                RedirectLink: uploadform.link.value,
                EventStartsAt: relativeDATE(uploadform.dateS.value),
                LinkExpireAt: relativeDATE(uploadform.dateE.value),
                Description: uploadform.message.value,
                IMG_URL: newURL,
                UploadTimeStamp: Date.now()
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
















        
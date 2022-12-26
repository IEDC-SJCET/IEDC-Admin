import { addDoc, collection } from "firebase/firestore";
import { DB } from "./login";
import { uploadFile } from "./storage";
import { OpenLoading, closeLoading, verifyUPDATE, relativeDATE } from "./main";
import { updateThumbnail } from "./drop";

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
                EventVenue: uploadform.venue.value,
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


    // const eventIMG = document.getElementById("eventIMG");
    // eventIMG.addEventListener('change',(e)=>{
    //     console.log('added file')
    //     file = e.target.files[0];
    //     file_name = file.name;
    //     console.log(file_name)
        
    // });

    document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
                const dropZoneElement = inputElement.closest(".drop-zone");

                dropZoneElement.addEventListener("click", (e) => {
                    inputElement.click();
                });

                inputElement.addEventListener("change", (e) => {
                    if (inputElement.files.length) {
                        console.log('added file')
                        file = e.target.files[0];
                        file_name = file.name;
                        console.log(file_name)
                        updateThumbnail(dropZoneElement, file);
                    }
                });

                dropZoneElement.addEventListener("dragover", (e) => {
                    e.preventDefault();
                    dropZoneElement.classList.add("drop-zone--over");
                });

                ["dragleave", "dragend"].forEach((type) => {
                    dropZoneElement.addEventListener(type, (e) => {
                        dropZoneElement.classList.remove("drop-zone--over");
                    });
                });

                dropZoneElement.addEventListener("drop", (e) => {
                    e.preventDefault();

                    if (e.dataTransfer.files.length) {
                        inputElement.files = e.dataTransfer.files;
                        console.log('added file')
                        file = e.dataTransfer.files[0];
                        file_name = file.name;
                        console.log(file_name)
                        updateThumbnail(dropZoneElement, file);
                    }

                    dropZoneElement.classList.remove("drop-zone--over");
                });
            });
}
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

export const autoFORM = () => {
    const formForAlert = document.getElementById('formForAlert');
    const FORMS = collection(DB,'FORMS');

    formForAlert.addEventListener('submit',e => {
        e.preventDefault();
        OpenLoading();
        console.log("before adding doc");

        uploadFile("FORM", file, file_name, metadata).then(r => {
            newURL = r;
            addDoc(FORMS, {
                RedirectLink: formForAlert.Alertlink.value,
                ExpireAt: relativeDATE(formForAlert.dateE.value),
                IMG_URL: newURL,
                UploadTimeStamp: Date.now()
            }).then(() => {
                formForAlert.reset();
                console.log("Form Created");
                $("#app").load( "forms/successfull.html", ()=> {
                    verifyUPDATE(newURL);
                });

            })
        }).catch(e => {
            console.log(e);
            $("#app").load( "forms/failed.html", ()=> {
                verifyUPDATE('.');
            });
        })
        .finally(()=>{
            closeLoading();
        })
    })


    // const alertIMG = document.getElementById("alertIMG");
    // alertIMG.addEventListener('change',(e)=>{
    //     file = e.target.files[0];
    //     file_name = file.name;
        
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
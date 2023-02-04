import { addDoc, collection } from "firebase/firestore";
import { DB } from "./login";
import { uploadFile } from "./storage";
import { OpenLoading, closeLoading, verifyUPDATE, relativeDATE } from "./main";
import { updateThumbnail } from "./drop";

const metadata = {
  contentType: 'image/jpeg',
  author: 'IEDC-SJCET-Palai'
};

var file;
var file_name;
var newURL;

export const autoFORM = () => {
    const autoForm = document.getElementById('autoForm');
    const FORMS = collection(DB,'FORMS');

    autoForm.addEventListener('submit',e => {
        e.preventDefault();
        OpenLoading();

        file_name = (autoForm.EventName.value).replace(/ +/g,"");
        uploadFile("FORM", file, file_name, metadata).then(r => {
            newURL = r;
            let Q1 = autoForm.extQ1.value === ""? "empty" : autoForm.extQ1.value;
            let Q2 = autoForm.extQ2.value === ""? "empty" : autoForm.extQ2.value;
            let Q3 = autoForm.extQ3.value === ""? "empty" : autoForm.extQ3.value;
            let extText = autoForm.extText.value === ""? "empty" : autoForm.extText.value;
            let collectionName = (autoForm.EventName.value).replace(/ +/g,"");
            
            addDoc(FORMS, {

                EventName: autoForm.EventName.value,
                EventDescription: autoForm.EventDes.value,
                EventStartAt: relativeDATE(autoForm.eventStartsAt.value),
                FormEndsAt: relativeDATE(autoForm.formEndsAt.value),
                TimeStamp: Date.now(),
                ImgURL: newURL,
                extText: extText,
                extQ1: Q1,
                extQ2: Q2,
                extQ3: Q3,
                collectionName: collectionName

            }).then(() => {
                autoForm.reset();
                console.log("Form Created");
                $("#app").load( "forms/successfull.html", ()=> {
                    verifyUPDATE(newURL);
                    closeLoading();
                });
            })
            .catch(e => {
                console.log(e);
                $("#app").load( "forms/failed.html", ()=> {
                    verifyUPDATE(newURL);
                    closeLoading();
                });
            })
            }).catch(e => {
                console.log(e);
                $("#app").load( "forms/failed.html", ()=> {
                    verifyUPDATE('.');
                    closeLoading();
                });
            })
    })


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
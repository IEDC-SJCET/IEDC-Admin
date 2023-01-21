import { authLogout } from "./login.js";
import { autoFORM } from "./autoFORM.js";
import { uploader } from "./uploader.js";
import { viewFeedback } from "./getFEEDBACK.js";
import { getLatestForm } from "./formTable";
export function allOptions() {
    const authLogoutBTN = document.getElementById('authLogoutBTN');
    authLogoutBTN.addEventListener('click', e => {
        e.preventDefault();
        authLogout();
    });

const addEventsBTN = document.getElementById('addEventsBTN');
    addEventsBTN.addEventListener('click', e => {
        e.preventDefault();
        $("#app").load( "forms/upload.html", ()=> {
          uploader();
        });


    });

const createFormBTN = document.getElementById('createFormBTN');
    createFormBTN.addEventListener('click', e => {
        e.preventDefault();
        console.log("auto form loading");
        $("#app").load( "forms/autoFORM.html", ()=> {
            autoFORM();
        });
    });


const viewFormBTN = document.getElementById('viewFormBTN');
    viewFormBTN.addEventListener('click', e => {
        e.preventDefault();
        $("#app").load( "forms/viewFormResponce.html", ()=> {
            getLatestForm();
        });
    });


const viewFeedbackBTN = document.getElementById('viewFeedbackBTN');
    viewFeedbackBTN.addEventListener('click', e => {
        e.preventDefault();
        $("#app").load( "forms/viewFeedbacks.html", ()=> {
            viewFeedback();
        });
    });
}
import { authLogout } from "./login.js";
import { AlertFormJS } from "./notification.js";
import { uploader } from "./uploader.js";
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
        console.log("add alert");
        $("#app").load( "forms/alertPANEL.html", ()=> {
            // this is not a alert panel thing
            // im too lazy to rewrite it all to createForm thing
            AlertFormJS();
        });
    });


const viewFormBTN = document.getElementById('viewFormBTN');
    viewFormBTN.addEventListener('click', e => {
        e.preventDefault();
        $("#app").load( "forms/viewFormResponce.html", ()=> {
            getLatestForm();
        });
    });
}


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
        console.log("upload section loading");

        $("#app").load( "../dist/forms/upload.html", ()=> {
          uploader();
        });


    });

const addAlertBTN = document.getElementById('addAlertBTN');
    addAlertBTN.addEventListener('click', e => {
        e.preventDefault();
        console.log("add alert");

        $("#app").load( "../dist/forms/alertPANEL.html", ()=> {
            // activate alert form
            AlertFormJS();
        });


    });


}
// const removeEventsBTN = document.getElementById('removeEventsBTN');


import { authLogout } from "./login.js";
import { autoFORM } from "./autoFORM.js";
import { uploader } from "./uploader.js";
import { viewFeedback } from "./getFEEDBACK.js";
import { getLatestForm } from "./formTable";
import { startupform } from "./startup.js";


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
          addBackBtn();
        });
    });

const createFormBTN = document.getElementById('createFormBTN');
    createFormBTN.addEventListener('click', e => {
        e.preventDefault();
        console.log("auto form loading");
        $("#app").load( "forms/autoFORM.html", ()=> {
            autoFORM();
            addBackBtn();
        });
    });


const viewFormBTN = document.getElementById('viewFormBTN');
    viewFormBTN.addEventListener('click', e => {
        e.preventDefault();
        $("#app").load( "forms/viewFormResponce.html", ()=> {
            getLatestForm();
            setTimeout(() => {
                addBackBtn();
            }, 6000);
        });
    });


const viewFeedbackBTN = document.getElementById('viewFeedbackBTN');
    viewFeedbackBTN.addEventListener('click', e => {
        e.preventDefault();
        $("#app").load( "forms/viewFeedbacks.html", ()=> {
            viewFeedback();
            addBackBtn();
        });
    });

const viewCustomForm = document.getElementById('viewCustomForm');
    viewCustomForm.addEventListener('click', e => {
        e.preventDefault();
        $("#app").load( "forms/startup.html", ()=> {
            startupform();
            addBackBtn();
        });
    });
}

function addBackBtn(){
    const backBTN = document.getElementById('backBTN');
    backBTN.addEventListener('click', e => {
        e.preventDefault();
        $("#app").load( "forms/options.html", ()=> {
            allOptions();
        });
    });
}
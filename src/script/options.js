import { authLogout } from "./login.js";

export function allOptions() {
const authLogoutBTN = document.getElementById('authLogoutBTN');
authLogoutBTN.addEventListener('click', e => {
    e.preventDefault();
    authLogout();
});


 const addAlertBTN = document.getElementById('addAlertBTN');
    addAlertBTN.addEventListener('click', e => {
        e.preventDefault();
        console.log("add alert");

        $("#app").load( "../dist/forms/alertPANEL.html", ()=> {

          //do something here

        });


    });


}
// const removeEventsBTN = document.getElementById('removeEventsBTN');
// const addEventsBTN = document.getElementById('addEventsBTN');

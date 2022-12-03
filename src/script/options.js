import { authLogout } from "./login.js";
export function logout() {
const authLogoutBTN = document.getElementById('authLogoutBTN');

authLogoutBTN.addEventListener('click', e => {
    e.preventDefault();
    authLogout();
});
}
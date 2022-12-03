export function closeLoading() {
    document.getElementById("loading").style.display = "none";
    // $("#app").load("../dist/forms/login.html"); 
}

export function OpenLoading() {
    document.getElementById("loading").style.display = 'block';
}

export function clearValue(id) {
    document.getElementById(id).value = "";
}
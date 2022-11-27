function loading() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loading").style.display = "none";
    $("#app").load("./forms/login.html"); 
}


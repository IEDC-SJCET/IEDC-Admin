const loader = document.getElementById("loading").style;


// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
  } else {
    console.log('user logged out');
  }
})


function closeLoading() {
    loader.display = "none";
    $("#app").load("./forms/login.html"); 
}

function OpenLoading() {
    loader.display = 'block';
}


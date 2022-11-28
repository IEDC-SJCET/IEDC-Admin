// login
const loginForm = document.querySelector('#loginform');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  console.log("hi auth done");
  // get user info
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    console.log(cred.user);
    loginForm.reset();
    OpenLoading();
  });

});
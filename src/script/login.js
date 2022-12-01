// login
const loginForm = document.querySelector('#loginform');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  console.log("hi auth done");
  // get user info
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // log the user in
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    console.log(userCredential.user);
    loginForm.reset();
    OpenLoading();
  })

});
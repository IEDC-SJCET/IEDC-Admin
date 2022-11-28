const name = document.getElementById('name').value;
const dateS= document.getElementById('dateS').value;
const link= document.getElementById('link').value;
const dateE= document.getElementById('dateE').value;
const message= document.getElementById('message').value;
const file = document.getElementById("photo").files[0];
const time= currentdate;
  
document.getElementById("form").onsubmit = async function (e) {
    
    e.preventDefault();

    uploadBytes(storageRef, file).then((snapshot) => {
    console.log('file uploaded');
    afterPic()
  });
}
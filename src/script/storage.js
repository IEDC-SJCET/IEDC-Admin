import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./login";

export const uploadFile = (dir, file, file_name, metadata ) => {
    return new Promise((resolve, reject)=>{
        const storageRef = ref(storage, dir +'/'+ file_name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed',
        (snapshot) => {
            //do nothing
        }, 
        (error) => {
            switch (error.code) {
            case 'storage/unauthorized':
            case 'storage/canceled':
            case 'storage/unknown':
                reject("Uploading Error");
            }
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
            });
        }
        );
      
   });
    
}
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { DB } from "./login.js";
import { timeDifference } from "./main.js";

// const dateFormater = new Intl.RelativeTimeFormat('en', { style: 'narrow', numeric: "auto"  });

const formTemplate = (doc, now)=>{
    let date = timeDifference(now,doc.UploadTimeStamp) 
    return `<tr>
                <td>${date}</td>
                <td>${doc.name}</td>
                <td>${doc.email}</td>
                <td>${doc.feedback}</td>
            </tr>`
} 

export const viewFeedback =  async () => {
    const formContainer = document.getElementById("formContainer");
    const FD = collection(DB,'FEEDBACK');
    const qry = query(FD, orderBy("UploadTimeStamp", "desc"));
    let now = new Date()
    const querySnapshot = await getDocs(qry);
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        formContainer.innerHTML += formTemplate(data,now)
    });
}
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { DB } from "./login.js";



const formContainer = document.getElementById("formContainer");
export const getLatestForm =  async () => {
    const FORMS = collection(DB,'FORMS');
    const qry = query(FORMS, orderBy("UploadTimeStamp", "desc"), limit(1));

    const querySnapshot = await getDocs(qry);
    querySnapshot.forEach((doc) => {
        console.log(doc)
    });

}
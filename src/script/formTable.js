import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { DB } from "./login.js";

const FORMS = collection(DB, "FORMS");


const formContainer = document.getElementById("formContainer");
export const getLatestForm = () => {
    const qry = query(FORMS, orderBy("UploadTimeStamp", "desc"), limit(1));

    const querySnapshot = await getDocs(qry);
    querySnapshot.forEach((doc) => {

    });

}
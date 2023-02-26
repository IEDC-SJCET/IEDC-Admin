import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { DB } from "./login.js";
import { timeDifference, timeDifferenceFuture } from "./main.js";


export const startupform =  async () => {
    
    const FORMS = collection(DB,'startup');
    const qry = query(FORMS, orderBy("UploadTimeStamp", "desc"));
    const responcesTableBody = document.getElementById('responcesTableBody');

    callmeRightNow(qry, responcesTableBody);


    document.getElementById('refreshBTN').addEventListener('click', (e)=>{
        e.preventDefault();
        callmeRightNow(qry, responcesTableBody);
    })

}



// iife i think
async function callmeRightNow (qry, responcesTableBody) {
    responcesTableBody.innerHTML = ``;
    const formResponces = await getDocs(qry);
    let counter = 0;
    formResponces.forEach((doc) => {
        let resData = doc.data()
        responcesTableBody.innerHTML += bodyTemplate(resData)
        counter++;
    })
    document.getElementById('noRes').innerHTML = counter;
}



function bodyTemplate (data){

    
    let member4 = typeof data.Member4  === 'object' ? `<td>${data.Member4.Name}</td><td>${data.Member4.Email}</td>` : `<td>NA</td><td>NA</td>`;
    let member5 = typeof data.Member5  === 'object' ? `<td>${data.Member5.Name}</td><td>${data.Member5.Email}</td>` : `<td>NA</td><td>NA</td>`;

    let template = `<tr>
                    <td>${timeDifference(new Date(), new Date(data.UploadTimeStamp))}</td>
                    <td>${data.TeamName}</td>
                    <td>${data.Leader.Name}</td>
                    <td>${data.Leader.Email}</td>
                    <td>${data.Leader.Phone}</td>
                    <td><a class="btn btn-dark rounded" target="_blank" href="${data.projectDoc}"><i class="bi bi-eye-fill"></i></a></td>
                    
                    <td>${data.FieldOfStudy}</td>
                    <td>${data.CurrentYear}</td>


                    <td>${data.Member2.Name}</td>
                    <td>${data.Member2.Email}</td>
                    <td>${data.Member3.Name}</td>
                    <td>${data.Member3.Email}</td>`
    
    return template + member4 + member5 + `</tr>`
}
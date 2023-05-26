import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { DB } from "./login.js";
import { timeDifference, timeDifferenceFuture } from "./main.js";


export const startupform =  async () => {
    
    const FORMS = collection(DB,'execom2023');
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


    let template = `<tr>
                    <td>${timeDifference(new Date(), new Date(data.UploadTimeStamp))}</td>
                    <td>${data.studentName}</td>
                    <td>${data.studentEmail}</td>
                    <td>${data.studentPhone}</td>

                    <td>${data.modeOfAttending}</td>
                    <td>${data.fieldOfStudy}</td>
                    <td>${data.currentYear}</td>

                    
                    <td class="modeField2">${choiceSpan(data.teamSelected)}</td>
                    <td class="moreField">${data.wish}</td>
                    <td class="moreField">${data.experience}</td>
                    <td class="moreField">${data.change}</td>
                    <td class="moreField">${data.skills}</td>
                    
                    

                    <td>
                        <a class="btn btn-dark rounded" target="_blank" href="${convertToURL(data.linkedin)}"><i class="bi bi-eye-fill"></i></a>
                        <span class="invisi">${convertToURL(data.linkedin)}</span>
                    </td>
                    <td>
                        <a class="btn btn-dark rounded" target="_blank" href="${convertToURL(data.portfolio)}"><i class="bi bi-eye-fill"></i></a>
                        <span class="invisi">${convertToURL(data.portfolio)}</span>
                    </td>

                    </tr>`
    
    return template
}

function choiceSpan (data){
    let template = `<div class="flex-wrap gap-1 d-flex">`
    data.forEach((e)=> {
        template += `<li class="list-unstyled px-3 py-1 rounded-5 ${e}">${e}</li>`
    })
    return template + `</div>`
}

/**
 * 
 * @param {string} data 
 * @returns {string}
 */

function convertToURL(data){
    let newURL = data.includes('http') ? data : `https://${data}`
    return newURL
}
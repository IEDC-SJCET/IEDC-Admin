import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { DB } from "./login.js";
import { timeDifference, timeDifferenceFuture } from "./main.js";

const firestoreName = "smart-india-hackathon"
    /**
     * @typedef member
     * ​@property {string} branch
     * ​@property {string} ​​name
     * ​@property {string} ​​year 
     * 
     */

    /**
     * @typedef firestoredata
     * ​@property {string} member1Email
     * ​@property {string} member1Phone
     * 
     * ​@property {member} member1
     * ​@property {member} member2
     * ​@property {member} member3
     * ​@property {member} member4
     * ​@property {member} member5
     * ​@property {member} member6
     * 
     * ​@property {string} describe
     * ​@property {string} psCode
     * ​@property {string} psTitle
     * ​@property {string} techStack
     * ​@property {string} theme
     * ​@property {string} url
     * ​@property {string} useCase
     * ​@property {string} dependency
     */


export const startupform =  async () => {
    
    const FORMS = collection(DB, firestoreName);
    const qry = query(FORMS) //, orderBy("UploadTimeStamp", "desc"));
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
        let /** @type {firestoredata}*/ resData = doc.data()
        responcesTableBody.innerHTML += bodyTemplate(resData)
        counter++;
    })
    document.getElementById('noRes').innerHTML = counter;
}

/**
 * 
 * @param {firestoredata} data 
 * @returns {string}
 */

function bodyTemplate (data){

    // <td class="modeField2">${choiceSpan(data.teamSelected)}</td>
    let template = `<tr>
                    <td>${ data?.UploadTimeStamp ? timeDifference(new Date(), new Date(data.UploadTimeStamp)) : "-"}</td>
                    <td>${data.member1.name}</td>
                    <td>${data.member1.branch}</td>
                    <td>${data.member1.year}</td>

                    <td>${data.member1Email || ""}</td>
                    <td>${data.member1Phone || ""}</td>

                    <td>${data.member2.name || ""}</td>
                    <td>${data.member2.branch || ""}</td>
                    <td>${data.member2.year || ""}</td>

                    <td>${data.member3.name || ""}</td>
                    <td>${data.member3.branch || ""}</td>
                    <td>${data.member3.year || ""}</td>

                    <td>${data.member4.name || ""}</td>
                    <td>${data.member4.branch || ""}</td>
                    <td>${data.member4.year || ""}</td>

                    <td>${data.member5.name || ""}</td>
                    <td>${data.member5.branch || ""}</td>
                    <td>${data.member5.year || ""}</td>

                    <td>${data.member6.name || ""}</td>
                    <td>${data.member6.branch || ""}</td>
                    <td>${data.member6.year || ""}</td>
                    
                    
                    <td class="moreField">${data.describe || ""}</td>
                    <td class="moreField">${data.psTitle || ""}</td>
                    <td class="moreField">${data.psCode || ""}</td>
                    <td class="moreField">${data.dependency || ""}</td>
                    <td class="moreField">${data.techStack || ""}</td>
                    <td class="moreField">${data.theme || ""}</td>
                    <td class="moreField">${data.useCase || ""}</td>
                    
                    <td>
                        <a class="btn btn-dark rounded" target="_blank" href="${convertToURL(data.url)}"><i class="bi bi-eye-fill"></i></a>
                        <span class="invisi">${convertToURL(data.url)}</span>
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
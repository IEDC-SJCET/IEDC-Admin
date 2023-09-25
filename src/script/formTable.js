import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { DB } from "./login.js";
import { timeDifference, timeDifferenceFuture } from "./main.js";


export const getLatestForm =  async () => {
    
    const formHead = document.getElementById("formHead");
    const FORMS = collection(DB,'FORMS');
    const qry = query(FORMS, orderBy("TimeStamp", "desc"), limit(1));

    const querySnapshot = await getDocs(qry);
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        console.log(data);
        formHead.innerHTML += headTemplate(data);
        let extQ1BOL = data.extQ1 === "empty";
        let extQ2BOL = data.extQ2 === "empty";
        let extQ3BOL = data.extQ3 === "empty";

        const formResCollection = collection(DB, data.collectionName);
        const qry = query(formResCollection, orderBy("TimeStamp", "desc"));

        const responcesTable = document.getElementById('responcesTable')
        responcesTable.innerHTML += `<tr>
                    <th>TimeStamp</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Whatsapp</th>
                    <th>Dept</th>
                    <th>Year</th>
                    <th>College</th>
                    
                    ${extQ1BOL ? ``  : `<th>${data.extQ1}</th>`}
                    ${extQ2BOL ? ``  : `<th>${data.extQ2}</th>`}
                    ${extQ3BOL ? ``  : `<th>${data.extQ3}</th>`}
                    
                    <th>Source</th>
                    <th>Message</th>
                </tr>`;
            const responcesTableBody = document.getElementById('responcesTableBody');
            callmeRightNow(qry, responcesTableBody, extQ1BOL, extQ2BOL, extQ3BOL);

            document.getElementById('refreshBTN').addEventListener('click', (e)=>{
                e.preventDefault();
                callmeRightNow(qry, responcesTableBody, extQ1BOL, extQ2BOL, extQ3BOL);
            })
    });
}



// iife i think
async function callmeRightNow (qry, responcesTableBody,  extQ1BOL, extQ2BOL, extQ3BOL) {
    responcesTableBody.innerHTML = ``;
    const formResponces = await getDocs(qry);
    let counter = 0;
    formResponces.forEach((doc) => {
        let resData = doc.data()
        console.log(resData)
        responcesTableBody.innerHTML += bodyTemplate(resData, extQ1BOL, extQ2BOL, extQ3BOL)
        counter++;
    })
    document.getElementById('noRes').innerHTML = counter;
}



function bodyTemplate (data, bol1, bol2, bol3){

    let template = `<tr>
                    <td>${timeDifference(new Date(), new Date(data.TimeStamp))}</td>
                    <td>${data.Name}</td>
                    <td>${data.Email}</td>
                    <td>${data.WhatsappNumber}</td>
                    <td>${data.branch}</td>
                    <td>${data.currentYear}</td>
                    <td>${data.institutionName}</td>`

    if (!bol1)
        template += `<td>${data.extQ1}</td>`
    if (!bol2)
        template += `<td>${data.extQ2}</td>`
    if (!bol3)
        template += `<td>${data.extQ3}</td>`
    
    return template += `<td>${data.ads}</td>
                        <td>${data.message}</td></tr>`
}





function headTemplate(data) {

    let live = new Date(data.FormEndsAt) > new Date() ? `<span class="greencolor">Live <i class="bi bi-check-circle-fill"></i></span>` : `<span class="text-danger">Closed <i class="bi bi-x-circle-fill"></i></span>`;
    let formEnded = new Date (data.FormEndsAt) > new Date() ? `<span>Form ends in ${timeDifferenceFuture(new Date(), new Date(data.FormEndsAt))}</span>` : `<span>Form ended ${timeDifference(new Date(), new Date(data.FormEndsAt))}</span>`
    let eventStarted = new Date(data.EventStartAt) > new Date() ? `<span>Event starts in ${timeDifferenceFuture(new Date(), new Date(data.EventStartAt))}</span>` : `<span>Event started ${timeDifference(new Date(), new Date(data.EventStartAt))}</span>`


    return `<div class="card shadow-lg container p-0" style="max-width: 500px;">
        <img src=${data.ImgURL} alt="" class="card-img-top">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h2 class="fs-2 fw-bolder">${data.EventName}</h2>
            <a id="backBTN"> ${live} </a>
            
        </div>
        <div class="card-body">
            <div class="d-flex gap-1"><i class="bi bi-person-fill greencolor"></i>
                x<span id="noRes"></span>
            </div>
            <div class="d-flex gap-1"><i class="bi bi-clock-fill greencolor"></i>
                ${formEnded}
            </div>
            <div class="d-flex gap-1"><i class="bi bi-clock-fill greencolor"></i>
                ${eventStarted}
            </div>
        </div>
        <div class="d-flex gap-1 card-footer">
                <button id="refreshBTN" class="btn btn-dark rounded">
                    Refresh <i class="bi bi-arrow-clockwise"></i>
                </button>
        </div>
    </div>`
}
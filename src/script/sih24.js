import { collection, getDocs, query } from "firebase/firestore";
import { DB } from "./login.js";
import { timeDifference } from "./main.js";

const firestoreName = "sih-hackathon-24";

/**
 * @typedef member
 * ​@property {string} branch
 * ​@property {string} ​​name
 * ​@property {string} ​​year
 * ​@property {string} ​​email
 * ​@property {string} ​​foodPreference
 */

/**
 * @typedef firestoredata
 * ​@property {string} UploadTimeStamp
 * ​@property {string} techStack
 * ​@property {string} categoryOfProduct
 * ​@property {string} teamName
 * ​@property {string} url
 * ​@property {member} teamLeader
 * ​@property {member[]} members
 */

/**
 * Fetch and display form data
 */
export const sihForm = async () => {
  const FORMS = collection(DB, firestoreName);
  const qry = query(FORMS); //, orderBy("UploadTimeStamp", "desc"));
  const responcesTableBody = document.getElementById("responcesTableBody");

  await callmeRightNow(qry, responcesTableBody);

  document.getElementById("refreshBTN").addEventListener("click", (e) => {
    e.preventDefault();
    callmeRightNow(qry, responcesTableBody);
  });
};

// Fetch and render data
async function callmeRightNow(qry, responcesTableBody) {
  responcesTableBody.innerHTML = ``;
  const formResponces = await getDocs(qry);

  let counter = 0;

  formResponces.forEach((doc) => {
    let resData = doc.data();
    responcesTableBody.innerHTML += bodyTemplate(resData);
    counter++;
  });

  document.getElementById("noRes").innerHTML = counter;
}

/**
 * Create table row from the form data
 * @param {firestoredata} data
 * @returns {string}
 */
function bodyTemplate(data) {
  let template = `<tr>
                    <td>${
                      data?.UploadTimeStamp
                        ? timeDifference(
                            new Date(),
                            new Date(data.UploadTimeStamp)
                          )
                        : "-"
                    }</td>
                    <td>${data.teamLeader.studentName}</td>
                    <td>${data.teamLeader.branch}</td>
                    <td>${data.teamLeader.currentYear}</td>
                    <td>${data.teamLeader.studentEmail}</td>
                    <td>${data.teamLeader.studentPhone}</td>
                    <td>${
                      data.teamLeader.foodPreference || ""
                    }</td> <!-- Food Preference -->

                    <td>${data.members[0]?.member2Name || ""}</td>
                    <td>${data.members[0]?.member2Branch || ""}</td>
                    <td>${data.members[0]?.member2Year || ""}</td>
                    <td>${data.members[0]?.member2FoodPreference || ""}</td>

                    <td>${data.members[1]?.member3Name || ""}</td>
                    <td>${data.members[1]?.member3Branch || ""}</td>
                    <td>${data.members[1]?.member3Year || ""}</td>
                    <td>${data.members[1]?.member3FoodPreference || ""}</td>

                    <td>${data.members[2]?.member4Name || ""}</td>
                    <td>${data.members[2]?.member4Branch || ""}</td>
                    <td>${data.members[2]?.member4Year || ""}</td>
                    <td>${data.members[2]?.member4FoodPreference || ""}</td>

                    <td>${data.members[3]?.member5Name || ""}</td>
                    <td>${data.members[3]?.member5Branch || ""}</td>
                    <td>${data.members[3]?.member5Year || ""}</td>
                    <td>${data.members[3]?.member5FoodPreference || ""}</td>

                    <td>${data.members[4]?.member6Name || ""}</td>
                    <td>${data.members[4]?.member6Branch || ""}</td>
                    <td>${data.members[4]?.member6Year || ""}</td>
                    <td>${data.members[4]?.member6FoodPreference || ""}</td>

                    <td>${data.describe || ""}</td>
                    <td>${data.psTitle || ""}</td>
                    <td>${data.psCode || ""}</td>
                    <td>${data.dependency || ""}</td>
                    <td>${data.techStack || ""}</td>
                    <td>${data.theme || ""}</td>
                    <td>${data.useCase || ""}</td>
                    
               <td>
  <a class="btn btn-dark rounded" target="_blank" href="${
    data.url ? convertToURL(data.url) : "#"
  }">
    <i class="bi bi-eye-fill"></i>
  </a>
  <span class="invisi">${
    data.url ? convertToURL(data.url) : "No URL provided"
  }</span>
</td>

                  </tr>`;
  return template;
}

/**
 * Converts a string into a URL if not already a full URL
 * @param {string} data
 * @returns {string}
 */
function convertToURL(data) {
  // Ensure data is defined and not null
  if (!data) {
    return "#"; // return a placeholder URL or empty string if data is undefined
  }

  // Check if the URL contains 'http', otherwise prepend 'https://'
  let newURL = data.includes("http") ? data : `https://${data}`;
  return newURL;
}

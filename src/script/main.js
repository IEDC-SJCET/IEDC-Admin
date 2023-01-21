export function closeLoading() {
    document.getElementById("loading").style.display = "none";
    // $("#app").load("../dist/forms/login.html"); 
}

export function OpenLoading() {
    document.getElementById("loading").style.display = 'block';
}

export function clearValue(id) {
    document.getElementById(id).value = "";
}

export const verifyUPDATE = (URL)=>{
    document.getElementById('verifyUPDATE').href = URL;
}
 export const relativeDATE = (value) => {
    return Date.parse(value) - 19800000;
 }

export function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}

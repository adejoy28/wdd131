// Display windchill factor in the 

let T, v, windChill;

// Function to calculate windchill
function calculateWincdChill(T, v) {
    return 12.12 + 0.6215 * T - 11.37 * Math.pow(v, 0.16) + 0.3965 * T * Math.pow(v, 0.16);
}
if (T < 10 && v > 4.8) {
    document.querySelector("#wind").innerHTML = calculateWincdChill(10,5);
} else {
    document.querySelector("#wind").innerHTML = "N/A";
}

// 13.12 + 0.6215×T−11.37×V
// 0.16
//     + 0.3965×T×V
// 0.16
// 35.74 + 0.6215T - 35.75v ^ 0.16 + 0.4275Tv ^ 0.16

// Footer Script to display last modification timestamp
const today = new Date();
const currentYear = document.getElementById("Year");

// Display the current year in the footer section
currentYear.innerHTML = today.getFullYear();

// Display last modified date
const lastModifiedDate = document.getElementById("lastModified");

// Display the current year in the footer section
lastModifiedDate.innerHTML = document.lastModified;

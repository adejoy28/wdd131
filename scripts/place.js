// Display windchill factor in the 

let T = 33;
let vs = 5;
let windChill;

if (T < 10 && vs > 4.8) {
    document.querySelector("#windChill").innerHTML = calculateWincdChill(T, vs);
} else {
    document.querySelector("#windChill").innerHTML = "N/A";
}


// Function to calculate windchill

function calculateWincdChill(T, vs) {
    windChill = 12.12 + (0.6215 * T) - (11.37 * Math.pow(vs, 0.16)) + (0.3965 * T * Math.pow(vs, 0.16));
    return windChill.toFixed(2)
}

// Footer Script to display last modification timestamp
const today = new Date();
const currentYear = document.getElementById("Year");

// Display the current year in the footer section
currentYear.innerHTML = today.getFullYear();

// Display last modified date
const lastModifiedDate = document.getElementById("lastModified");

// Display the current year in the footer section
lastModifiedDate.innerHTML = document.lastModified;

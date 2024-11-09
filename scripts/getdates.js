
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();



document.getElementById("Year").innerHTML = currentYear;

// for last modified date
document.getElementById("lastModifiedDate").innerHTML =
    `${currentDay}/${currentMonth}/${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`;

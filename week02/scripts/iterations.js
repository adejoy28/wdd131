const DAYS = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for Loops

console.log("Using for loop");
for (let student = 0; student < studentReport.length; student++) {
    const report = studentReport[student];
    if (report <= 30) {
        console.log(report);
    }
}


console.log("Using While loop");
// while (let student >= ) {

// }

console.log("Using forEach loop");
studentReport.forEach(student => {
    if (student <= 30) {
        console.log(student);
    }
});

console.log("Using for..in loop");
for (const student in studentReport) {
    const report = studentReport[student];
    if (Object.prototype.hasOwnProperty.call(studentReport, student)) {
        if (report <= 30) {
            console.log(report);
        }
    }
}
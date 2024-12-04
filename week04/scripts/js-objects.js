// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: "TTh",
            instructor: 'Bro T',
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: "TTh",
            instructor: 'Sis A',
        },

    ],
};


// let enrolledStudent = aCourse{};

console.log(this.sections);


console.log(aCourse.section);
console.log(aCourse);


const section = document.querySelector("#section");
let eachSection;
aCourse.sections.forEach(eachSection);
// aCourse.sections.forEach(displayTableContent(eachSection));

function displayTableContent(eachSection) {
    console.log(eachSection);
}

section.innerHTML = `<tr>${aCourse.sections.sectionNum}`;
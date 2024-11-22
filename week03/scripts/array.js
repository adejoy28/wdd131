var foodArray = ["fish", "rice", "mango", "beans", "yam", "pizzad"];

console.log("list all element in the list(foodArray");
foodArray.forEach(function (food) {
    console.log(food);
}
);

console.log("Slice(1,4)");
console.log(foodArray.slice(1, 4));

console.log("Join");
console.log(foodArray.join(", "));

let firstName = 'Antonia';
let lastName = 'Francesca';

function combineNames(firstName, lastName) {
    let com = firstName + " " + lastName;
    return com
}

console.log(combineNames());

console.log("Anonymous function");

var anon = function () {
    return firstName + " " + lastName;;
}
console.log(anon());

console.log("Arrow function");

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(10)



//     (a) => {
//     console.log(a + "rice is beautiful");
// };

// const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(fullName("Gbenga", "sola"));


document.querySelector("#fullName").textContent = combineNames("jesus", "daniel");
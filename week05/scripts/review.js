
let countReview;
let submitButton = document.querySelector("#submit");

if (localStorage.getItem("count") >= 0) {
    count = Number(localStorage.getItem("count"));
} else {
    count = 0;
}
function reviewCounter(countReview) {
    countReview += 1;
    localStorage.setItem("count", countReview);
    console.log(countReview)
}

let y = document.querySelector("#review");

y.addEventListener('load', //() => {
    reviewCounter(count)
    //  y.innerHTML = "<h3>Form filled and submitted successfully</h3>";
    //}
);
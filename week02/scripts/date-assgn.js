const today = new Date();

const ul = document.querySelector("#favorite-foods");

let currentDate = Intl.DateTimeFormat("en-US",
    {
        dateStyle: "long"
    }
).format(today);

ul.innerHTML = currentDate;




const article = document.querySelector("article");

(document);
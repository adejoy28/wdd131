const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

let selectProductName = document.querySelector("#product-name");

products.forEach(product => {
    // console.log(product.name);

    let option = document.createElement("option");
    option.setAttribute("value", product.name);
    option.setAttribute("id", product.id);
    option.textContent = `${product.name} (${product.averagerating})`;

    selectProductName.appendChild(option);
});

let star = document.querySelector(".star");
let radios = document.querySelectorAll("input[type='radio']");

radios.forEach(radio => {
    radio.addEventListener("click", () => {
        // alert(1);
        // if (input[type="radio"].att = true) {
        star.classList.add("star-selected");
        // } else {
        //     star.classList.remove("star-selected");
        // }

    });
});

// star.forEach(s => {
//     s.innerHTML = "star";
// });

/* <option value="">Choose a Product</option>
   <option value="">Choose a Product</option>
    <option value="">Choose a Product</option> */
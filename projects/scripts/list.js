const drinks = [
    alcholic = [
        wine = [
            {
                itemName: "",
                description: "",
                price: "",
            },
            {
                itemName: "CARLO ROSSI",
                description: "",
                price: "18,000",
            },
            {
                itemName: "TWO OCEANS",
                description: "",
                price: "15,000",
            },
            {
                itemName: "FOUR COUSINS",
                description: "",
                price: "18,000",
            },
            {
                itemName: "HOUSE WINE(GLASS)",
                description: "",
                price: "5,000",
            },
        ],
        beer = [
            {
                itemName: "HEINEKEN BIG",
                description: "",
                price: "3,000",
            },
            {
                itemName: "BUDWEISER",
                description: "3,000",
                price: "",
            },
            {
                itemName: "GULDER",
                description: "",
                price: "2, 500",
            },
            {
                itemName: "33",
                description: "",
                price: "2,000",
            },
            {
                itemName: "TROPHY",
                description: "",
                price: "2, 500",
            },
            {
                itemName: "STAR RADLER",
                description: "",
                price: "2, 500",
            },
            {
                itemName: "SMALL STOUT",
                description: "",
                price: "₦2,000",
            },
            {
                itemName: "ORIJIN(BIG)",
                description: "",
                price: "3,000",
            },
        ]
    ],
    nonAlcholic = [

    ]
]

let heroSection = document.querySelector(".hero-s");

// heroSection.innerHTML = "jesus"
// console.log(drinks);

drinks.forEach(mainCat => {
    // console.log(drink[itemName]);
    mainCat.forEach(subCat => {
        console.log(subCat);
        subCat.forEach(item => {
            console.log(`${item.itemName} ---------- ${item.price}`);
        })
    })
});
const drinks = [
    alcholic = [
        wine = [
            {
                itemName: "CARLO ROSSI",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "18,000",
            },
            {
                itemName: "TWO OCEANS",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "15,000",
            },
            {
                itemName: "FOUR COUSINS",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "18,000",
            },
            {
                itemName: "HOUSE WINE(GLASS)",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "5,000",
            },
        ],
        beer = [
            {
                itemName: "HEINEKEN BIG",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "3,000",
            },
            {
                itemName: "BUDWEISER",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "3,000",
            },
            {
                itemName: "GULDER",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "2, 500",
            },
            {
                itemName: "33",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "2,000",
            },
            {
                itemName: "TROPHY",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "2, 500",
            },
            {
                itemName: "STAR RADLER",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "2, 500",
            },
            {
                itemName: "SMALL STOUT",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "2,000",
            },
            {
                itemName: "ORIJIN(BIG)",
                description: "Fresh tomatoes, fresh mozzarrella, fresh basil",
                price: "3,000",
            },
        ]
    ],
    nonAlcholic = [

    ]
];

const national = [
    snacks = [
        chicken = [
            {
                itemName: "CHICKEN SUYA",
                description: "Chicken skewer marinated with arewa suya spice",
                price: "18,000",
            },
            {
                itemName: "CHICKEN & CHIPS",
                description: "Fried or grilled chicken served with french fries or yam chips",
                price: "15,000",
            },
            {
                itemName: "FISH & CHIPS",
                description: "Fried or grilled tilapia fish served with french fries or yam chips",
                price: "18,000",
            },
            {
                itemName: "BEEF SUYA",
                description: "Lean beef skewer marinated with arewa suya spice",
                price: "5,000",
            },
        ],
        soup = [
            {
                itemName: "BBQ CHICKEN WINGSG",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "3,000",
            },
            {
                itemName: "CHICKEN",
                description: "Chicken wings in coffee infused BBQ sauce",
                price: "3,000",
            },
            {
                itemName: "TURKEY",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "2, 500",
            },
            {
                itemName: "BEEF",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "2,000",
            },
            {
                itemName: "GOAT MEAT",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "2, 500",
            },
            {
                itemName: "COW LEG",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "2, 500",
            },
            {
                itemName: "CAT FISH",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "2,000",
            },
            {
                itemName: "SNAIL",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "3,000",
            },
        ]
    ]
    // dessert = [
    //     {
    //         itemName: "TILAPIA FISH",
    //         description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
    //         price: "3,000",
    //     },
    //     {
    //         itemName: "CROAKER FISH",
    //         description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
    //         price: "3,000",
    //     },

    // ]
];
const intercontinental = [
    snack = [
        chickens = [
            {
                itemName: "LAMB CURRY",
                description: "Dishes prepared with freshly made curry spices including garlic, ginger, cumin, coriander, turmeric, onion and a pinch of cinnamon.",
                price: "18,000",
            },
            {
                itemName: "CHINESE RICE & CHICKEN",
                description: "Rice, eggs, vegetables with chicken lap",
                price: "15,000",
            },
            {
                itemName: "FISH & CHIPS",
                description: "Fried or grilled tilapia fish served with french fries or yam chips",
                price: "18,000",
            },
            {
                itemName: "BEEF SUYA",
                description: "Lean beef skewer marinated with arewa suya spice",
                price: "5,000",
            },
        ],
        food = [
            {
                itemName: "BBQ CHICKEN WINGSG",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "3,000",
            },
            {
                itemName: "CHICKEN",
                description: "Chicken wings in coffee infused BBQ sauce",
                price: "3,000",
            },
            {
                itemName: "TURKEY",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "2, 500",
            },
            {
                itemName: "BEEF",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "2,000",
            },
            {
                itemName: "GOAT MEAT",
                description: "Edikaikong, Egusi,Afang, Ogbono, Ewedu, Bitter leaf, White soup, Efo riro or Stew",
                price: "2, 500",
            },
            {
                itemName: "T-BONE STEAK 350G",
                description: "300g of T-bone steak served with thyme jus",
                price: "2, 500",
            },
            {
                itemName: "CHICKEN FAJITAS",
                description: "Strips of chicken breast seasoned and cooked with vegetables, wrapped in tortilla or taco shells",
                price: "2,000",
            },
            {
                itemName: "CHICKEN CORDON BLEU",
                description: "Breaded chicken breast stuffed with cheese (or ham) served with tartar & cocktail sauce",
                price: "3,000",
            },
        ]
    ]
];


// let heroSection = document.querySelector(".hero-s");
// document.get
// heroSection.innerHTML = "jesus"
// console.log(drinks);

drinks.forEach(mainCat => {
    mainCat.forEach(subCat => {
        // console.log(subCat);
        subCat.forEach(item => {
            let tagName = "#Drinks";
            createAndFixElement(tagName, item.itemName, item.price, item.description)
        })
    })
});
intercontinental.forEach(mainCat => {
    mainCat.forEach(subCat => {
        // console.log(subCat);
        subCat.forEach(item => {
            let tagName = "#Intercontinental";
            createAndFixElement(tagName, item.itemName, item.price, item.description)
        })
    })
});
national.forEach(mainCat => {
    mainCat.forEach(subCat => {
        // console.log(subCat);
        subCat.forEach(item => {
            let tagName = "#National";
            createAndFixElement(tagName, item.itemName, item.price, item.description)
        })
    })
});
// national.forEach(mainCat1 => {
//     mainCat1.forEach(subCat1 => {
//         // console.log(subCat);
//         subCat1.forEach(item => {
//             let tagName = "#National";
//             createAndFixElement(tagName, item.itemName, item.price, item.description)
//         })
//     })
// });
// intercontinental.forEach(mainCat => {
//     mainCat.forEach(subCat => {
//         console.log(subCat);
//         subCat.forEach(item => {
//             let tagName = "#Intercontinental";
//             createAndFixElement(tagName, item.itemName, item.price, item.description)
//         })
//     })
// });

function createAndFixElement(tagName, bt, st, pt) {

    let drinksTag = document.querySelector(tagName);

    let div = document.createElement("div");
    div.setAttribute("class", "menu-item");
    let h1 = document.createElement("h1");
    let b = document.createElement("b");
    let span = document.createElement("span");
    span.setAttribute("class", "price");
    let p = document.createElement("p");
    let hr = document.createElement("hr");


    b.textContent = bt;
    span.textContent = `₦ ${st}`;
    p.textContent = pt;

    h1.appendChild(b);
    h1.appendChild(span);

    div.appendChild(h1);
    div.appendChild(p);

    drinksTag.appendChild(div);
}



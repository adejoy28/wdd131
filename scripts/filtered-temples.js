const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-guam-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-dc-temple.jpeg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Puebla Mexico",
        location: "Puebla, Mexico",
        dedicated: "2024, May, 19",
        area: 35865,
        imageUrl: "images/puebla-mexico-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Orem Utah",
        location: "Orem Utah, United States",
        dedicated: "2024, January, 21",
        area: 71998,
        imageUrl: "images/orem-utah-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Brasília Brazil",
        location: "Brasilia-DF Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl: "images/brasilia-brazil-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Red Cliffs Utah",
        location: "St. George, Utah, United States",
        dedicated: "2024, March, 24",
        area: 96277,
        imageUrl: "images/red-cliffs-utah-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "images/paris-france-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Arequipa Peru",
        location: "Arequipa Peru",
        dedicated: "2019, December, 15",
        area: 7969,
        imageUrl: "images/arequipa-peru-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Urdaneta Philippines",
        location: "Urdaneta City, Pangasinan Philippines",
        dedicated: "2024, April, 28",
        area: 32604,
        imageUrl: "images/urdaneta-philippines-temple.jpg"
        // "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
];

// Home - displays all the temples stored in the array.

createTempleCard(temples);


const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

const filterTitle = document.querySelector("#filter-title");

homeLink.addEventListener('click', () => {
    filterTitle.textContent = "Home";
    // homeLink.setAttribute("class", "active");
    newLink.classList.remove('active');
    oldLink.classList.remove('active');
    largeLink.classList.remove('active');
    smallLink.classList.remove('active');

    createTempleCard(temples);

})

// Old - temples built before 1900
oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 3).includes("19")));
    filterTitle.textContent = "Old Temples";
    homeLink.classList.remove("active");
    oldLink.classList.add("active");
    newLink.classList.remove('active');
    largeLink.classList.remove('active');
    smallLink.classList.remove('active');
});

// New - temples built after 2000
newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 3).includes("20")));
    filterTitle.textContent = "New Temples";
    homeLink.classList.remove("active");
    oldLink.classList.remove("active");
    newLink.classList.add('active');
    largeLink.classList.remove('active');
    smallLink.classList.remove('active');
});

// Large - temples larger than 90000 square feet
largeLink.addEventListener("click", () => {
    filterTitle.textContent = "Large Temples";
    homeLink.classList.remove("active");
    oldLink.classList.remove("active");
    newLink.classList.remove('active');
    largeLink.classList.add('active');
    smallLink.classList.remove('active');

    createTempleCard(temples.filter(temple => checkArea(temple.area)));
    function checkArea(area) {
        if (area > 90000) {
            return area;
        }
    }
});

// Small - temples smaller than 10000 square feet
smallLink.addEventListener("click", () => {
    filterTitle.textContent = "Small Temples";
    homeLink.classList.remove("active");
    oldLink.classList.remove("active");
    newLink.classList.remove('active');
    largeLink.classList.remove('active');
    smallLink.classList.add('active');

    createTempleCard(temples.filter(temple => checkArea(temple.area)));
    function checkArea(area) {
        if (area < 10000) {
            return area;
        }
    }
});

function createTempleCard(filteredTemples) {
    document.querySelector(".sections").innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        let div = document.createElement("div");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area.toLocaleString('en-US')} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("lt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(img);
        card.appendChild(div)
        div.appendChild(name);
        div.appendChild(location);
        div.appendChild(dedication);
        div.appendChild(area);

        document.querySelector(".sections").appendChild(card);
    });
}






















// Display for footers
const today = new Date();
const currentYear = document.getElementById("Year");

// Display the current year in the footer section
currentYear.innerHTML = today.getFullYear();

// Display last modified date
const lastModifiedDate = document.getElementById("lastModified");

// Display the current year in the footer section
lastModifiedDate.innerHTML = document.lastModified;


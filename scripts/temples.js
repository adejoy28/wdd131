const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// Display for footers
const today = new Date();
const currentYear = document.getElementById("Year");

// Display the current year in the footer section
currentYear.innerHTML = today.getFullYear();

// Display last modified date
const lastModifiedDate = document.getElementById("lastModified");

// Display the current year in the footer section
lastModifiedDate.innerHTML = document.lastModified;




const hamButton = document.querySelector('#hambugger-menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Tabbed MENU

function openMenu(event, menuName) {
    var i, x, tablinks;
    x = document.querySelectorAll(".menu");
    // console.log(x);
    
    for (i=0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablink");
    for (let i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tb-red", "");        
    }
    document.querySelector(`#${menuName}`).style.display = "block";
    event.currentTarget.firstElementChild.className += " tb-red";
}
document.querySelector("#myLink").click();
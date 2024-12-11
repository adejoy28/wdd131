// Set the localStorage
localStorage.setItem('username', 'John Adebayo');

// Retrieve the user's name
const username = localStorage.getItem('username');
// alert(username);


// Set the user's name and age
const user = { name: 'John Adebayo', age: 30 };

// make sure to convert the dat to a string
localStorage.setItem('user', JSON.stringify(user));

// get the name and age back from localStorage
const getUser = JSON.parse(localStorage.getItem('user'));
// alert(getUser.name);
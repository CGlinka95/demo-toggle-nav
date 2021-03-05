// Step 1: Query the document and select the element the user will click on to make the nav show and hide
const button = document.querySelector('.hamburger-btn');

// Step 2: Place a click event on the button
button.addEventListener('click', () => {
    // when the button is clicked, grab the nav element and add the special class
    document.querySelector('nav').classList.toggle('show-nav');
});

// Note: When placing a class name inside the classList method, do not include the . It will expect a class name
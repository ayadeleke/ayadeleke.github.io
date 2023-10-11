// Get the navigation bar element
const nav = document.querySelector('header');

// Function to update the navigation bar style on scroll
function updateNavbarStyle() {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#555';
    } else {
        nav.style.backgroundColor = '#333';
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', updateNavbarStyle);

// Initially, set the navigation bar style
updateNavbarStyle();

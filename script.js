const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.getElementById("navbar-links");
const closeButton = document.getElementById("close-button");

function thankMsg() {
    alert("Thank you for buying! :)");
}

function toggleNavbar() {
    navbarLinks.classList.toggle("active");
}

// Show the navbar when clicking the menu toggle
menuToggle.addEventListener("click", toggleNavbar);

// Hide the navbar when clicking the close button
closeButton.addEventListener("click", function () {
    navbarLinks.classList.remove("active");
});

// Close the navbar when clicking outside
document.addEventListener("click", function (event) {
    const isClickInside = navbarLinks.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside) {
        navbarLinks.classList.remove("active");
    }
});

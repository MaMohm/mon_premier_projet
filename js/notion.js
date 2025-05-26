document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    toggleBtn.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});

// This script toggles the visibility of the menu when the button is clicked
// It listens for the 'DOMContentLoaded' event to ensure the DOM is fully loaded before attaching the event listener
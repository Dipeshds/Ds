// JavaScript to toggle the mobile menu and add a class to the body
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const shift = document.shift;

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    shift.classList.toggle('menu-active');
});
// JavaScript to control the preloader animation
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    // Add a class to trigger the fade-out animation
    preloader.classList.add('fade-out');

    // Remove the preloader from the DOM after the animation duration
    setTimeout(function () {
        preloader.style.display = 'none';
        content.style.display = 'block'; // Show the content
    }, 1000); // Adjust the time as needed (in milliseconds)
});

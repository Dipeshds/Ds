const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const closeButton = document.getElementById("closeButton");

menuToggle.addEventListener("click", () => {
    navLinks.classList.add("show");
 
   
});

  

closeButton.addEventListener("click", () => {
    navLinks.classList.remove("show");
    
});

// Wait for the page to load
window.addEventListener('load', function () {
    // Hide the preloader by adding a "hidden" class to the preloader element
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');
});

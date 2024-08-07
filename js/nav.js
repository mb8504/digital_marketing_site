const button = document.getElementById('mobile-toggle-button');
const mobileNav = document.getElementById('mobile-navbar');

button.addEventListener('click', () => {
    button.classList.toggle('active');
    mobileNav.classList.toggle('active');
});



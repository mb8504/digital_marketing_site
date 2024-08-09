const myFunction =(arg) => {
    const contentContainer = document.querySelector(arg);

    contentContainer.addEventListener('click', (e) => {
        const clickedElement = e.target.closest('.content-group-header');

        clickedElement.querySelector('i').classList.toggle('fa-plus');
        clickedElement.querySelector('i').classList.toggle('fa-minus');
        clickedElement.nextElementSibling.classList.toggle('open');
    });
}

document.addEventListener('DOMContentLoaded', () => myFunction('.ppc-content'));
document.addEventListener('DOMContentLoaded', () => myFunction('.seo-content'));
document.addEventListener('DOMContentLoaded', () => myFunction('.social-content'));
document.addEventListener('DOMContentLoaded', () => myFunction('.analytics-content'));



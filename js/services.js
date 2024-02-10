document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.querySelector('.ppc-content');

    contentContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.content-group-header');
        
        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.content-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body
        groupBody.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.querySelector('.seo-content');

    contentContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.content-group-header');
        
        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.content-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body
        groupBody.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.querySelector('.social-content');

    contentContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.content-group-header');
        
        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.content-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body
        groupBody.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.querySelector('.analytics-content');

    contentContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.content-group-header');
        
        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.content-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body
        groupBody.classList.toggle('open');
    });
});
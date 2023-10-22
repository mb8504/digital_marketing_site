const btn = document.getElementsByClassName('btn');
const slide = document.getElementById('slides');
const btnClick = document.querySelectorAll('.btn');

btn[0].onclick = function() {
    slide.style.transform = 'translateX(0px)';
}
btn[1].onclick = function() {
    slide.style.transform = 'translateX(-1368px)';
}
btn[2].onclick = function() {
    slide.style.transform = 'translateX(-2736px)';
}

btnClick.forEach(activeBtn => {
    activeBtn.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        activeBtn.classList.add('active');
    });
});

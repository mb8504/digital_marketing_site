const firstButton = document.getElementById('dot1');
const secondButton = document.getElementById('dot2');
const thirdButton = document.getElementById('dot3');

const slide = document.getElementById('slides');

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true
  });

firstButton.addEventListener('click', () => {
    console.log('First dot clicked');
    slide.style.transform = 'translateX(0px)';
});

secondButton.addEventListener('click', () => {
    console.log('Second dot clicked');
    slide.style.transform = 'translateX(-1368px)'
});

thirdButton.addEventListener('click', () => {
    console.log('Third dot clicked');
    slide.style.transform = 'translateX(-2766px)';
});

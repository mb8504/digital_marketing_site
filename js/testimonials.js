const btn = document.getElementsByClassName('btn');
const slide = document.getElementById('slides');
const btnClick = document.querySelectorAll('.btn');
let mediaQuery = window. matchMedia('(min-width: 768px)');

function handleMediaQueryChange(event) {
    // Media query is matched (e.g., screen width is <= 768px)
    // Your JavaScript code here
    if (event.matches) {
        // then log the following message to the console
        btn[0].onclick = function() {
            slide.style.transform = 'translateX(0px)';
        }
        btn[1].onclick = function() {
            slide.style.transform = 'translateX(-1368px)';
        }
        btn[2].onclick = function() {
            slide.style.transform = 'translateX(-2766px)';
        }
        
        btnClick.forEach(activeBtn => {
            activeBtn.addEventListener('click', () => {
                document.querySelector('.active').classList.remove('active');
                activeBtn.classList.add('active');
            });
        });
    } else {
        btn[0].onclick = function() {
            slide.style.transform = 'translateX(0px)';
        }
        btn[1].onclick = function() {
            slide.style.transform = 'translateX(-336px)';
        }
        btn[2].onclick = function() {
            slide.style.transform = 'translateX(-674px)';
        }
        
        btnClick.forEach(activeBtn => {
            activeBtn.addEventListener('click', () => {
                document.querySelector('.active').classList.remove('active');
                activeBtn.classList.add('active');
            });
        });
    }
}

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
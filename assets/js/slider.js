export default function slider() {
    const sliderWrap = document.querySelector('.slider');
    const sliderLine = document.querySelector('.slider__line');
    const collectSlides = document.querySelectorAll('.slider__slide');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');

    let widthSliderWrap;
    let count = 0;

    function checkWidth() {
        let widthWindow = window.innerWidth;

        if (widthWindow < 680) {
            [numSlides, valueMargin] = [1, 9];
        } else {
            [numSlides, valueMargin] = [2, 14];
        }
    }

    function init() {
        checkWidth();

        widthSliderWrap = sliderWrap.offsetWidth;
        sliderLine.style.width = collectSlides.length * widthSliderWrap / numSlides + 'px'

        collectSlides.forEach(slide => {
            slide.style.margin = `0px ${valueMargin}px`;
            slide.style.width = (widthSliderWrap / numSlides) - (valueMargin * 2) + 'px';
            slide.style.height = 'auto';
        })

        moveSlide();  // вызывается для удержания текущих слайдов на месте при изменении размеров экрана
    }

    init();
    window.addEventListener('resize', init);

    btnPrev.addEventListener('click', function () {
        count--;

        if (count < 0) count = 0;
       
        moveSlide();
    })

    btnNext.addEventListener('click', function () {
        count++;

        checkWidth();

        if (count > collectSlides.length - numSlides) count = 0;

        moveSlide();
    })

    function moveSlide() {
        sliderLine.style.transform = `translate(-${count * widthSliderWrap / numSlides}px)`; 
    }
}
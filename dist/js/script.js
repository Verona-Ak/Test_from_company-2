'use strict';
window.addEventListener('DOMContentLoaded', function() {
    $('.slider__inner').slick({
        prevArrow: false,
        nextArrow: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });

    const range = document.querySelector('#range'),
        slides = document.querySelectorAll('.slider__item'),
        track = document.querySelector('.slick-track');
    let arr = [1];

    range.addEventListener('input', ()=> {
        let id = range.value; 
        arr.push(id);
        if(id > arr[arr.length-2]) {
            track.style.transform += "translateX(" + (-49.9) + "px)";
        } else {
            track.style.transform += "translateX(" + (+49.9) + "px)";
        }
        if(Number.isInteger(id)) {
            clearClasses();
            let slide = document.getElementById(id);
            slide.classList.add('slick-active');
            slide.classList.add('slick-current');
            slide.setAttribute('aria-hidden', "false");
            slide.setAttribute('tabindex', "0");

        }
    });

    range.addEventListener('change', ()=> {
        // let id = range.value;
        // if(Number.isInteger(id)) {
        //     clearClasses();
        //     let slide = document.getElementById(id);
        //     slide.classList.add('slick-active');
        //     slide.classList.add('slick-current');
        //     slide.setAttribute('aria-hidden', "false");
        //     slide.setAttribute('tabindex', "0");

        // }

    });
    function clearClasses() {
        for(let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('slick-active');
            slides[i].classList.remove('slick-current');
            slides[i].setAttribute('aria-hidden', "true");
            slides[i].setAttribute('tabindex', "-1");
        }
    }
});
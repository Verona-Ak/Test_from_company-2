'use strict';
window.addEventListener('DOMContentLoaded', function() {
    // Слайдер
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

    // Ползунок
    const range = document.querySelector('#range'),
        track = document.querySelector('.slick-track');

    range.addEventListener('input', ()=> {
        let id = range.value; 
        track.style.transform = "translateX(" + (id*-1) + "px)";
    });

    $('#slick').on('swipe', function(event, slick, direction){
        const values = track.style.transform.split(/\w+\(|\);?/);
        const transform = values[1].split(/,\s?/g).map(parseInt);
        range.value = (Number(transform[0]))*-1;
    });

    // Hamburger в шапке
    const hamburgerHeader = document.querySelector('.header__hamburger'),
        navList = document.querySelector('.nav__list'),
        navItems = document.querySelectorAll('.nav__item');

    hamburgerHeader.addEventListener('click', function() {
        hamburgerHeader.classList.toggle('header__hamburger_active');
        navList.classList.toggle('nav__list_active');
    });

    for(let item of navItems) {
        item.addEventListener('click', function(e) {
            hamburgerHeader.classList.remove('header__hamburger_active');
            navList.classList.remove('nav__list_active');
        });
    }

    // Выпадающий список при выборе языка
    const select = document.querySelector('#select'),
        selectText = document.querySelector('.header__leng-item'),
        arrow = document.querySelector('.header__arrow'),
        options = document.querySelector('.header__options');
    let leng = 'en', count = 0;

    select.addEventListener('click', ()=> {
        count++;
        options.classList.toggle('header__options_active');
        if(count % 2 !== 0) {
            arrow.style.transform = 'rotate(180deg)';
        } else {
            arrow.style.transform = '';
        }
    });

    options.addEventListener('click', (e)=> {
        if(e.target && e.target.classList.contains('header__option')) {
            switch (e.target.id) {
                case 'en': selectText.textContent = 'En'; break;
                case 'ru': selectText.textContent = 'Ru'; break;
                default: break;
            }
            leng = e.target.id;
        }
    });










    
});
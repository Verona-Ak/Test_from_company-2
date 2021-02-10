'use strict';

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener('DOMContentLoaded', function () {
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
  }); // Ползунок

  var range = document.querySelector('#range'),
      track = document.querySelector('.slick-track');
  range.addEventListener('input', function () {
    var id = range.value;
    track.style.transform = "translateX(" + id * -1 + "px)";
  });
  $('#slick').on('swipe', function (event, slick, direction) {
    var values = track.style.transform.split(/\w+\(|\);?/);
    var transform = values[1].split(/,\s?/g).map(parseInt);
    range.value = Number(transform[0]) * -1;
  }); // Hamburger в шапке

  var hamburgerHeader = document.querySelector('.header__hamburger'),
      navList = document.querySelector('.nav__list'),
      navItems = document.querySelectorAll('.nav__item');
  hamburgerHeader.addEventListener('click', function () {
    hamburgerHeader.classList.toggle('header__hamburger_active');
    navList.classList.toggle('nav__list_active');
  });

  var _iterator = _createForOfIteratorHelper(navItems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.addEventListener('click', function (e) {
        hamburgerHeader.classList.remove('header__hamburger_active');
        navList.classList.remove('nav__list_active');
      });
    } // Выпадающий список при выборе языка

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var select = document.querySelector('#select'),
      selectText = document.querySelector('.header__leng-item'),
      arrow = document.querySelector('.header__arrow'),
      options = document.querySelector('.header__options');
  var leng = 'en',
      count = 0;
  select.addEventListener('click', function () {
    count++;
    options.classList.toggle('header__options_active');

    if (count % 2 !== 0) {
      arrow.style.transform = 'rotate(180deg)';
    } else {
      arrow.style.transform = '';
    }
  });
  options.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('header__option')) {
      switch (e.target.id) {
        case 'en':
          selectText.textContent = 'En';
          break;

        case 'ru':
          selectText.textContent = 'Ru';
          break;

        default:
          break;
      }

      leng = e.target.id;
    }
  });
});
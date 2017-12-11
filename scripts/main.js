// var colorButton = document.querySelector('[data-color-button]');
// var pauseButton = document.querySelector('[data-pause-button]');
// var hideButton = document.querySelector('[data-hide-button]');

var qSelList = document.querySelectorAll('[data-circle]');

var one = qSelList[0];
var two = qSelList[1];
var three = qSelList[2];
var four = qSelList[3];
var five = qSelList[4];
var six = qSelList[5];
var seven = qSelList[6];
var eight = qSelList[7];

// var placeholderOne = document.querySelector('[data-placeholder-one]');
// var placeholderTwo = document.querySelector('[data-placeholder-two]');

qSelList.forEach(function(n) {
    n.classList.add(n.getAttribute('data-circle'));
})

// pauseButton.addEventListener('click', function() {
//     one.classList.toggle('pause');
//     two.classList.toggle('pause');
//     three.classList.toggle('pause');
//     four.classList.toggle('pause');
//     five.classList.toggle('pause');
//     six.classList.toggle('pause');
//     seven.classList.toggle('pause');
//     eight.classList.toggle('pause');
// });

// colorButton.addEventListener('click', function() {
//     one.classList.toggle('one-color');
//     two.classList.toggle('two-color');
//     three.classList.toggle('three-color');
//     four.classList.toggle('four-color');
//     five.classList.toggle('five-color');
//     six.classList.toggle('six-color');
//     seven.classList.toggle('seven-color');
//     eight.classList.toggle('eight-color');
// });

// hideButton.addEventListener('click', function() {
//     one.classList.toggle('hide');
//     two.classList.toggle('hide');
//     three.classList.toggle('hide');
//     four.classList.toggle('hide');
//     five.classList.toggle('hide');
//     six.classList.toggle('hide');
//     seven.classList.toggle('hide');
//     eight.classList.toggle('hide');

//     placeholderOne.classList.toggle('hold-place');
//     placeholderTwo.classList.toggle('hold-place');
// });

var NAV_SEL = "[data-nav-item]";
var IMG_SEL = "[data-target]";

var navItems = document.querySelectorAll(NAV_SEL);
var imgTarget = document.querySelector(IMG_SEL);

navItems.forEach(function (nav) {
  nav.addEventListener('click', function (event) {
    event.preventDefault();
    imgTarget.setAttribute('src', nav.getAttribute('href'));
  })
});
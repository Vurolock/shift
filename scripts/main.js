var colorButton = document.querySelector('[data-colorButton]');
var pauseButton = document.querySelector('[data-pauseButton]');
var hideButton = document.querySelector('[data-hideButton]');

var one = document.querySelector('[data-one]');
var two = document.querySelector('[data-two]');
var three = document.querySelector('[data-three]');
var four = document.querySelector('[data-four]');
var five = document.querySelector('[data-five]');
var six = document.querySelector('[data-six]');
var seven = document.querySelector('[data-seven]');
var eight = document.querySelector('[data-eight]');
var placeholderOne = document.querySelector('[data-placeholderOne]');
var placeholderTwo = document.querySelector('[data-placeholderTwo]');

pauseButton.addEventListener('click', function() {
    one.classList.toggle('pause');
    two.classList.toggle('pause');
    three.classList.toggle('pause');
    four.classList.toggle('pause');
    five.classList.toggle('pause');
    six.classList.toggle('pause');
    seven.classList.toggle('pause');
    eight.classList.toggle('pause');
});

colorButton.addEventListener('click', function() {
    one.classList.toggle('one-color');
    two.classList.toggle('two-color');
    three.classList.toggle('three-color');
    four.classList.toggle('four-color');
    five.classList.toggle('five-color');
    six.classList.toggle('six-color');
    seven.classList.toggle('seven-color');
    eight.classList.toggle('eight-color');
});

hideButton.addEventListener('click', function() {
    one.classList.toggle('hide');
    two.classList.toggle('hide');
    three.classList.toggle('hide');
    four.classList.toggle('hide');
    five.classList.toggle('hide');
    six.classList.toggle('hide');
    seven.classList.toggle('hide');
    eight.classList.toggle('hide');
    placeholderOne.classList.toggle('hold-place');
    placeholderTwo.classList.toggle('hold-place');
});
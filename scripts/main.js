var colorButton = document.querySelector('[data-colorButton]');
var pauseButton = document.querySelector('[data-pauseButton]');

var one = document.querySelector('[data-one]');
var two = document.querySelector('[data-two]');
var three = document.querySelector('[data-three]');
var four = document.querySelector('[data-four]');
var five = document.querySelector('[data-five]');
var six = document.querySelector('[data-six]');
var seven = document.querySelector('[data-seven]');
var eight = document.querySelector('[data-eight]');

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
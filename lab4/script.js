'use strict';
/* Task 1 */
function changeColors() {
    var task1Element = document.getElementById('task1');
    var randomBackgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    var randomTextColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    task1Element.style.backgroundColor = randomBackgroundColor;
    task1Element.style.color = randomTextColor;
}
function changeColors2() {
    var task1Element = document.querySelector('.task1');
    var randomBackgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    var randomTextColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    task1Element.style.backgroundColor = randomBackgroundColor;
    task1Element.style.color = randomTextColor;
}

/* Task 2 */
const image = document.getElementById('picture');
let startWidth = 700;
const step = 100;
function addPicture() {
image.src = "https://allaboutrosalilla.com/wp-content/uploads/2023/02/Tallinn-Christmas-Market-7.jpg?is-pending-load=1"

image.style.display = '';
}
function deletePicture() {
image.style.display = 'none';
}
function increase() {
startWidth += step;
image.style.width = `${startWidth}px`;
}
function decrease() {
startWidth -= step;
image.style.width = `${startWidth}px`;
}

addPicture()
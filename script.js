
// ==============================код слайдер кнопки===================================
// console.log('GREETINGS UNIVERSE!');
// let offset = 0; //смещение от левого края
// let slideWidth = 355;
// let b;
// const a = document.querySelector('.slider-line');
// document.querySelector('.slider-next').addEventListener('click', function () {
//     offset = offset + slideWidth;
//     if (offset > (slideWidth * 4)) {
//         offset = 0;
//     }
//     a.style.left = -offset + 'px';


//     // width (355px) from slider css + borders (5px+5px)
//     b = document.querySelector('.slider').offsetWidth;
//     console.log(b);
// });



// document.querySelector('.slider-back').addEventListener('click', function () {
//     offset = offset - slideWidth;
//     if (offset < 0){
//         offset = slideWidth*4;
//     }
//     a.style.left = -offset + 'px';
// });


// Here's what happens:

// offset = offset - slideWidth;: This line subtracts the slide width from the current offset, effectively moving the slider to the left.

// if (offset < 0) { offset = slideWidth * 4; }: This condition checks if the offset has become negative, which means you've moved past the first position. If this is the case, it sets the offset to the last position (slideWidth * 4). This is the wrap-around behavior you want.

// a.style.left = -offset + 'px';: This line updates the left CSS property of the slider element (a), effectively moving the slider to the new offset position.

// So, with slideWidth = 355px, when you click the back button and the offset becomes negative (indicating you've gone past the first position), it sets the offset to 1420 (the last position), creating a loop from the first position to the last when you click the back button.






// ==============================код адаптивный слайдер кнопки===================================

let images = document.querySelectorAll('.slider .slider-line img');
console.log(images.length);
let sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    console.log('resize');
    // console.log(width);
    
    sliderLine.style.width = width * images.length + 'px';
    // console.log(sliderLine.style.width);
    images.forEach(item => {
        item.style.width = width + 'px';
        // схранение пропорций изображений
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count > 4) {
        count = images.length - 5;
    }
    rollSlider();
});

function rollSlider() {
    //критично к пробелам 'translate(-'+count*width+'px)'
    sliderLine.style.transform='translate(-'+count*width+'px)';
} 


document.querySelector('.slider-back').addEventListener('click', () => {
    count = count - 1;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});


document.addEventListener('touchstart', handleTouchStart, false);


let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    console.log(firstTouch);
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    console.log(x1, y1);
}
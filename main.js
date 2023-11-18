// window.addEventListener('load', function () {
//     const huruf = document.querySelectorAll('.opacity');

//     huruf.forEach(function (blurrr, index) {
//         setTimeout(function () {
//             blurrr.style.opacity = '1';
//         }, 500 * index);
//     });
// });

window.addEventListener('load', function () {
    const huruf = document.querySelectorAll('.opacity');
    const indexes = Array.from(Array(huruf.length).keys());
    const shuffledIndexes = shuffleArray(indexes);

    shuffledIndexes.forEach(function (index, position) {
        setTimeout(function () {
            huruf[index].style.opacity = '1';
        }, 200 * position);
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// let valueDisplays = document.querySelectorAll('.num');
// let interval = 5000;
// let hasFunctionRun = false;

// function handleScroll() {
//     if (!hasFunctionRun) {
//         valueDisplays.forEach(valueDisplay => {
//             let startValue = 0;
//             let endValue = parseInt(valueDisplay.getAttribute("data-val"));

//             let duration = Math.floor(interval / endValue);
//             let counter = setInterval(function() {
//                 startValue += 1;
//                 valueDisplay.textContent = startValue;
//                 if (startValue == endValue) {
//                     clearInterval(counter);
//                 }
//             }, duration);
//         });

//         hasFunctionRun = true;
//     }
// }

let targetElement = document.querySelector('.timeline');
let barWidthHTML = document.querySelector('.bar-sectionHTML');
let barWidthCSS = document.querySelector('.bar-sectionCSS');
let barWidthJS = document.querySelector('.bar-sectionJS');

let valueDisplays = document.querySelectorAll('.persent');
let interval = 2000;
let hasFunctionRun = false;

function handleScroll() {
    if (!hasFunctionRun) {
        valueDisplays.forEach(valueDisplay => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));

            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });

        hasFunctionRun = true;

        window.removeEventListener('scroll', handleScroll);
    }
}
window.addEventListener('scroll', function () {
    let boundingBox = targetElement.getBoundingClientRect();

    if (
        boundingBox.top <= window.innerHeight &&
        boundingBox.bottom >= 0
    ) {
        barWidthHTML.classList.add('active');
        barWidthCSS.classList.add('active');
        barWidthJS.classList.add('active');
        handleScroll()
    }


})

// window.addEventListener('scroll', function() {
//     let scrollPosition = window.scrollY;
//     listA = document.querySelectorAll('.list');

//     listA.forEach(function(element, index) {
//         if (index == 0) {
//             element.style.color = scrollPosition <= 800 ? 'crimson' : '';
//         } else if (index == 1) {
//             element.style.color = scrollPosition > 800 && scrollPosition <= 1600 ? 'crimson' : '';
//         } else if (index == 2) {
//             element.style.color = scrollPosition > 1600 && scrollPosition <= 3500 ? 'crimson' : '';
//         } else if (index == 3) {
//             element.style.color = scrollPosition > 3500 && scrollPosition <= 5000 ? 'crimson' : '';
//         } else {
//             element.style.color = scrollPosition > 5000 ? 'crimson' : '';
//         }
//     })
// })

// let navLinks = document.querySelectorAll('.list');
// let divs = document.querySelectorAll('.section');

// window.addEventListener('scroll', function() {
//     divs.forEach(function(div, index) {
//         let position = div.getBoundingClientRect().top;

//         if (position <= 0) {
//             navLinks.forEach(function(link) {
//                 link.classList.remove('active');
//             })

//             navLinks[index].classList.add('active');
//         }
//     })
// })

// $(document).ready(function(){
//     $('a[href^="#"]').on('click', function(event) {
//         var target = $(this.getAttribute('href'));
//         if( target.length ) {
//             event.preventDefault();
//             $('html, body').stop().animate({
//                 scrollTop: target.offset().top
//             }, 1000);
//         }
//     });
// });


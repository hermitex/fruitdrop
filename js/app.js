const controller = document.querySelector('.controller input');
const basketImage = document.querySelector('.basket img');
const gameItems = document.querySelectorAll('.game-item');
const controls = document.querySelectorAll('.control');
const instructions = document.querySelector('.f');
const basketDiv = document.querySelector('.basket');
const div = document.querySelector('#div1');


const playGame = (e) => {
    if (e.target.classList.contains('play')) {
        e.target.classList.remove('play')
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        gameItems.forEach(item => {
            if (!item.classList.contains('game-item') && !e.target.classList.contains('play')) {
                item.classList.add('game-item')
            } else {
                item.classList.remove('game-item')
            }
        });
    } else {
        e.target.classList.add('play')
        e.target.classList.add('fa-play');
        e.target.classList.remove('fa-pause');
    }

}
if (window.innerWidth >= 320 && window.innerWidth <= 360) {
    document.body.style.fontSize = '0.9rem';
    instructions.style.fontSize = '1rem';

}
if (window.innerWidth == 375) {
    document.body.style.fontSize = '0.95rem';
    instructions.style.fontSize = '1.5rem';
    instructions.style.overflowY = 'auto';

}
if (window.innerWidth >= 960) {
    document.body.style.fontSize = '3rem';
    instructions.style.fontSize = '3rem';

}
if (window.innerWidth >= 768 && window.innerWidth <= 960) {
    document.body.style.fontSize = '2rem';
    instructions.style.fontSize = '3rem';

}

const moveBasket = (e) => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 450) {

        basketImage.style.right = `${-e.target.value * 15}px`;
    } else {
        basketImage.style.right = `${-e.target.value * 9.5}px`;
    }
    if (screenWidth == 320) {

        basketImage.style.right = `${-e.target.value * 7.5}px`;
    }
    if (screenWidth == 768) {

        basketImage.style.right = `${-e.target.value * 17}px`;
    }
    if (screenWidth == 1024) {

        basketImage.style.right = `${-e.target.value * 25}px`;
    }
    if (screenWidth >= 1260) {

        basketImage.style.right = `${-e.target.value * 30}px`;

    }
};



controller.oninput = moveBasket;

controls.forEach(control => {
    control.onclick = playGame;
});


// TESTING COLLISSION FUNCTION
// let div1 = document.getElementById('div1')

window.onload = function () {
    const collission = ($div1, $div2) => {
        let x1 = $div1.offset().left;
        let y1 = $div1.offset().top;
        let h1 = $div1.outerHeight(true)
        let w1 = $div1.outerHeight(true)
        let b1 = y1 + h1;
        let r1 = x1 + w1;
        let x2 = $div2.offset().left;
        let y2 = $div2.offset().top;
        let h2 = $div2.outHeight(true)
        let w2 = $div2.outHeight(true)
        let b2 = y2 + h2;
        let r2 = x2 + w2;
        return (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) ? false : true;
    }
    // gameItems.forEach(image => collission(image, basketDiv))
    if (window.innerWidth < 1100) {
        $(document).on('touchstart', e => {
            $(basketImage).offset({ left: e.pageX });
            // basketDiv.css('right', e.page);
            // basketDiv.css('top', e.page);
            // basketDiv.css('bottom', e.page);
        });
    }
    $(document).on('mousemove', e => {
        $(basketImage).offset({ left: e.pageX });
        // basketDiv.css('right', e.page);
        // basketDiv.css('top', e.page);
        // basketDiv.css('bottom', e.page);
    });



}
// console.log($(document))
// var offset = $(basketDiv).offset();
// var top = offset.top;
// var left = offset.left;
// console.log(offset)

// gameItems.forEach(image => {
//     var offset = $(image).offset();
//     var top = offset.top;
//     var left = offset.left;
//     console.log(offset.top)
// });


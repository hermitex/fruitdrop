const controller = document.querySelector('.controller input');
const basketImage = document.querySelector('.basket img');
const gameItems = document.querySelectorAll('.game-item');
const controls = document.querySelectorAll('.control');
const instructions = document.querySelector('.f');

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

gameItems.forEach(image => console.log(image))

controller.oninput = moveBasket;

controls.forEach(control => {
    console.log(control)
    control.onclick = playGame;
});
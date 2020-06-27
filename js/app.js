const controller = document.querySelector('.controller input');
const basketImage = document.querySelector('.basket img');
const gameItems = document.querySelectorAll('.game-item');
const controls = document.querySelectorAll('.control');

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


const moveBasket = (e) => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 450) {
        console.log(screenWidth)
        basketImage.style.right = `${e.target.value * 36}px`;
    } else {
        basketImage.style.right = `${e.target.value * 10}px`;
    }
};

// gameItems.forEach(image => console.log(image))

controller.oninput = moveBasket;

controls.forEach(control => {
    console.log(control)
    control.onclick = playGame;
});
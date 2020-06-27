const controller = document.querySelector('.controller input');
const basketImage = document.querySelector('.basket img');
let cursorPosition = window

const moveBasket = (e) => {
    let screenWidth = window.innerWidth;


    if (screenWidth >= 450) {
        console.log(screenWidth)
        basketImage.style.right = `${e.target.value * 36}px`;
    } else {
        basketImage.style.right = `${e.target.value * 10}px`;
    }

};

const changeBlinkRate = () => {
    if (basketImage.classList.contains('blink-quick')) {
        basketImage.classList.add('blink');
        basketImage.classList.remove('blink-quick');
    } else {
        basketImage.classList.remove('blink-quick');
        basketImage.classList.add('blink');
    }
};

controller.oninput = moveBasket;
controller.onchnage = changeBlinkRate;
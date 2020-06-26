const controller = document.querySelector('.controller input');
const basketImage = document.querySelector('.basket img');
let cursorPosition = window

const moveBasket = (e) => {
    let screenWidth = window.innerWidth;
    console.log(screenWidth)
    if (screenWidth >= 450) {
        console.log(screenWidth)
        basketImage.style.right = `${e.target.value * 35}px`;
    } else {
        basketImage.style.right = `${e.target.value * 10}px`;
    }




};

controller.oninput = moveBasket;

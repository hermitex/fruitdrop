const controller = document.querySelector('.controller input');
const basketImage = document.querySelector('.basket img');
let cursorPosition = window
let screenWidth = window.innerWidth;
console.log(cursorPosition)
console.log(controller.v)

const moveBasket = (e) => {
    console.log(e.target.value)
    basketImage.style.right = `${e.target.value}px`;

};

controller.oninput = moveBasket;

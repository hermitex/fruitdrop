const basketContainer = document.querySelector('.basket');
let cursorPosition = window
let screenWidth = window.innerWidth;
console.log(cursorPosition)
console.log(screenWidth)

const moveBasket = (e) => {
    console.log(e.screenX)
};

basketContainer.onmouseover = moveBasket;

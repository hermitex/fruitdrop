const basketContainer = document.querySelector('.basket');
const basketImage = document.querySelector('.basket img');
let cursorPosition = window
let screenWidth = window.innerWidth;
console.log(cursorPosition)
console.log(screenWidth)

const moveBasket = (e) => {
    console.log(e.screenX)
    let randomMargin = Math.floor(Math.random() * screenWidth)

    basketImage.style.right = `${randomMargin}px`;


};

basketContainer.onmouseover = moveBasket;

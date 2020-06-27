const controller = document.querySelector('.controller input');
const basketImage = document.querySelector('.basket img');
const gameItems = document.querySelectorAll('.game-item');



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

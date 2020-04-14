import { productsArray } from './productsArray.js';
import { incrementTimesSeen } from './utilities.js';
import { incrementTimesPicked } from './utilities.js';
import { chooseRandomProduct } from './utilities.js';

const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');

const radioButton1 = document.getElementById('radio-1');
const radioButton2 = document.getElementById('radio-2');
const radioButton3 = document.getElementById('radio-3'); 

const submitButton = document.getElementById('submit-button');

let gameCounter = 25;

renderProducts();

let answersArray = [];
const allTimeAnswersArray = [];


submitButton.addEventListener('click', () => {
    const productPick = document.querySelector('input[type=radio]:checked');
    const allRadios = document.querySelectorAll('input');

    allRadios.forEach((radio) => {
        incrementTimesSeen(Number(radio.value), answersArray);
    });

    incrementTimesPicked(Number(productPick.value), answersArray);



    const stringifiedAnswersArray = JSON.stringify(answersArray);
    localStorage.setItem('answersArrayKey', stringifiedAnswersArray);

    const strinifiedAllTimeAnswersArray = JSON.stringify(allTimeAnswersArray);
    localStorage.setItem('allTimeAnswersArrayKey', strinifiedAllTimeAnswersArray); 


    renderProducts();

    gameCounter-- ;
    if (gameCounter === 0) {
        location.href = 'results-page.html';
    }
});


function renderProducts() {
    const randomProduct1 = chooseRandomProduct(productsArray);
    let randomProduct2 = chooseRandomProduct(productsArray);
    let randomProduct3 = chooseRandomProduct(productsArray);
    radioButton1.value = randomProduct1.id;
    radioButton2.value = randomProduct2.id;
    radioButton3.value = randomProduct3.id;
    while (randomProduct1 === randomProduct2) {
        randomProduct2 = chooseRandomProduct(productsArray);
    }
    while (randomProduct3 === randomProduct2 || randomProduct3 === randomProduct1) {
        randomProduct3 = chooseRandomProduct(productsArray);
    }
    image1.src = randomProduct1.image;
    image2.src = randomProduct2.image;
    image3.src = randomProduct3.image;
}


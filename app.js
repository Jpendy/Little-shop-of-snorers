import { productsArray } from './productsArray.js';

const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');
const submitButton = document.getElementById('submit-button');


const randomProduct1 = chooseRandomProduct(productsArray);
let randomProduct2 = chooseRandomProduct(productsArray);
let randomProduct3 = chooseRandomProduct(productsArray);

let gameCounter = 25;


while (randomProduct1 === randomProduct2) {
    randomProduct2 = chooseRandomProduct(productsArray);
}
while (randomProduct3 === randomProduct2 || randomProduct3 === randomProduct1) {
    randomProduct3 = chooseRandomProduct(productsArray);
}


image1.src = randomProduct1.image;
image2.src = randomProduct2.image;
image3.src = randomProduct3.image;


function chooseRandomProduct(array) {
    const randomProductIndex = Math.floor(Math.random() * 20);
    return array[randomProductIndex];
}


submitButton.addEventListener('click', () => {
    const productPick = document.querySelectorAll('input[type=radio]:checked');

    productPickValue = productPick.value;

    const  = productPick.id;




    gameCounter-- ;
    if (gameCounter === 0) {
        location.href = 'results-page.html';
    }
});



let answersArray = [];
let allTimeAnswersArray = [];






const stringifiedAnswersArray = JSON.stringify(answersArray);
localStorage.setItem('answersArrayKey', stringifiedAnswersArray);

const strinifiedAllTimeAnswersArray = JSON.stringify(allTimeAnswersArray);
localStorage.setItem('allTimeAnswersArrayKey', strinifiedAllTimeAnswersArray); 




// const arrayAnswers = [ 
//     {
//     id: ,
//     name: ,
//     quantityChoice: ,
//     quantityView: ,
//     }
// ];
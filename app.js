import { productsArray } from './productsArray.js';

const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');
const radioButton1 = document.getElementById('radio-1');
const radioButton2 = document.getElementById('radio-2');
const radioButton3 = document.getElementById('radio-3'); 
const submitButton = document.getElementById('submit-button');



const randomProduct1 = chooseRandomProduct(productsArray);
let randomProduct2 = chooseRandomProduct(productsArray);
let randomProduct3 = chooseRandomProduct(productsArray);

let gameCounter = 25;

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


function chooseRandomProduct(array) {
    const randomProductIndex = Math.floor(Math.random() * 20);
    return array[randomProductIndex];
}


submitButton.addEventListener('click', () => {
    //const productPick = document.querySelectorAll('input[type=radio]:checked');
    
   // const product = findById(productsArray, productPick.value);


    




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




function findById(pokemonArray, idtoFind) {
    
    for (let i = 0; i < pokemonArray.length; i++) {
        const array = pokemonArray[i];

        if (array.id === idtoFind) {
            return array;
        }
    }
}





function incrementTimesSeen(id, votes) {
    let temp = findById(votes, id);
    if (!temp) {
        addInitialVoteItem(id, votes);
        temp = findById(id, votes);
    }
    temp.timesSeen++;
}


function incrementTimesPicked(id, votes) {
    let temp = findById(votes, id);
    if (!temp) {
        addInitialVoteItem(id, votes);
        temp - findById(id, votes);
    }
    temp.timesPicked++;
}


function addInitialVoteItem(id, votes) {
    const voteItem = {
        id: id,
        timesSeen: 0,
        timesPicked: 0
    };
    votes.push(voteItem);
}
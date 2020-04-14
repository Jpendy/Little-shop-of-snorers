import { productsArray } from './productsArray.js';

export function chooseRandomProduct(array) {
    const randomProductIndex = Math.floor(Math.random() * 20);
    return array[randomProductIndex];
}

export function findById(idtoFind, arrayToSearch) { 
    for (let i = 0; i < arrayToSearch.length; i++) {
        const array = arrayToSearch[i];

        if (array.id === idtoFind) {
            return array;
        }
    }
}

export function incrementTimesSeen(id, array) {
    let temp = findById(id, array);
    if (!temp) {
        addInitialVoteItem(id, array);
        temp = findById(id, array);
    }
    temp.timesSeen++;
}

export function incrementTimesPicked(id, array) {
    let temp = findById(id, array);
    if (!temp) {
        addInitialVoteItem(id, array);
        temp = findById(id, array);
    }
    temp.timesPicked++;
}

export function addInitialVoteItem(id, array) {
    const image = findById(id, productsArray);
    const voteItem = {
        image: image.image,
        id: id,
        timesSeen: 0,
        timesPicked: 0
    };
    array.push(voteItem);
}

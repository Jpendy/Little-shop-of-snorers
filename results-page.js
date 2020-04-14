

const mainSection = document.getElementById('main-section');
const answers_ul = document.createElement('ul');
const allTimeAnswers_ul = document.createElement('ul');


const allTimeAnswersArray = localStorage.getItem('allTimeAnswersArrayKey');
const parsed_AllTimeAnswersArray = JSON.parse(allTimeAnswersArray);


const answersArray = localStorage.getItem('answersArrayKey');
const parsed_AnswersArray = JSON.parse(answersArray);


parsed_AnswersArray.forEach((product) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const timesSeen = document.createElement('h2');
    const timesPicked = document.createElement('h2');

    timesSeen.textContent = product.timesSeen;
    timesPicked.textContent = product.timesPicked;

    img.classList.add('answers-image');
    li.classList.add('answers-text');

    li.append(img, timesSeen, timesPicked);
    answers_ul.appendChild(li);
});

parsed_AllTimeAnswersArray.forEach((product) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const timesSeen = document.createElement('h2');
    const timesPicked = document.createElement('h2');

    
    timesSeen.textContent = product.timesSeen;
    timesPicked.textContent = product.timesPicked;

    img.classList.add('answers-image');
    li.classList.add('answers-text');

    li.append(img, timesSeen, timesPicked);
    allTimeAnswers_ul.appendChild(li);
});



mainSection.append(answers_ul, allTimeAnswers_ul);
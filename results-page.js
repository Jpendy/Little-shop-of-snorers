const mainSection = document.getElementById('main-section');
const answers_ul = document.createElement('ul');
const allTimeAnswers_ul = document.createElement('ul');
const answersHeader = document.createElement('h1');
const allTimeAnswersHeader = document.createElement('h1');
const resetButton = document.getElementById('reset-button');


answersHeader.textContent = 'Product Choice Stats';
answersHeader.classList.add('header-class');

allTimeAnswersHeader.textContent = 'All-Time Product Choice Stats';
allTimeAnswersHeader.classList.add('header-class');

answers_ul.style.listStyle = 'none';
allTimeAnswers_ul.style.listStyle = 'none';


const allTimeAnswersArray = localStorage.getItem('allTimeAnswersArrayKey');
const parsed_AllTimeAnswersArray = JSON.parse(allTimeAnswersArray);


const answersArray = localStorage.getItem('answersArrayKey');
const parsed_AnswersArray = JSON.parse(answersArray);


parsed_AnswersArray.forEach((product) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const timesSeen = document.createElement('h2');
    const timesPicked = document.createElement('h2');
    const name = document.createElement('h1');

    name.textContent = product.name;
    img.src = product.image;
    img.style.float = 'left';
    timesSeen.textContent = `Number of Times Seen: ${product.timesSeen}`;
    timesPicked.textContent = `Number of Times Picked: ${product.timesPicked}`;

    img.classList.add('answers-image');
    li.classList.add('answers-text');

    li.append(img, name, timesSeen, timesPicked,);
    answers_ul.appendChild(li);
});


parsed_AllTimeAnswersArray.forEach((product) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const timesSeen = document.createElement('h2');
    const timesPicked = document.createElement('h2');
    const name = document.createElement('h1');

    name.textContent = product.name;
    img.src = product.image;
    img.style.float = 'left';


    timesSeen.textContent = `Number of Times Seen: ${product.timesSeen}`;
    timesPicked.textContent = `Number of Times Picked: ${product.timesPicked}`;

    img.classList.add('answers-image');
    li.classList.add('answers-text');

    li.append(img, name, timesSeen, timesPicked);
    allTimeAnswers_ul.appendChild(li);
});


const labelsArray = [];
const dataArray = [];


parsed_AnswersArray.forEach((product) => {
    const label = product.name;
    const dataPoint = product.timesPicked;
    labelsArray.push(label);
    dataArray.push(dataPoint);
});

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelsArray,
        datasets: [{
            label: '# of Votes',
            data: dataArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

resetButton.addEventListener('click', () => {
    let emptyArray = [];
    localStorage.setItem('answersArrayKey', emptyArray);
    localStorage.setItem('allTimeAnswersArrayKey', allTimeAnswersArray);
    answers_ul.textContent = null;
    location.href = 'index.html';

});

mainSection.append(answersHeader, answers_ul, allTimeAnswersHeader, allTimeAnswers_ul);
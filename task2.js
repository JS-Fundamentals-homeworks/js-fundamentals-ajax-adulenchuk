// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

let input = document.getElementById('userNameInput');
const button = document.getElementById('getUserButton');
let userCity = document.getElementById('userCity');

function getCity() {
    fetch(api).then(res => res.json()).then(data => {
        data.forEach(element => {
            if (element.name === input.value) {
                userCity.textContent = element.address.city;
            }
        });
    });    
}

button.onclick = getCity;
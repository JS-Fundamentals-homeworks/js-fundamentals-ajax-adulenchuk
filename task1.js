// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

const api = 'https://jsonplaceholder.typicode.com/users';
const usersList = document.querySelector('ul.usersList')
fetch(api).then(res => res.json()).then(data => {
    for (const element of data) {
        usersList.innerHTML += `<li>${element.name}</li>`;
    }
});
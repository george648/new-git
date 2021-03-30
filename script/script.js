'use strict'
import {data} from './data.js'

const userAddBtn = document.getElementById('userAddBtn');
const modalWindow = document.getElementById('modal');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const userData = document.querySelectorAll('.user_data_item');
const userContainer = document.getElementById('userContainer');
let userDataArray = Array.from(userData);
let newUserData = [];

function setUserData(array) {
    let containerItemName = document.createElement('div');
    let containerItemLastName = document.createElement('div');
    let containerItemAge = document.createElement('div');
    for (let i=0; i < array.length; i++) {
        containerItemName.innerHTML +=`<div class='flex item'> ${array[i].firstName} </div>`;
        containerItemLastName.innerHTML +=`<div class='flex item'> ${array[i].lastName} </div>`;
        containerItemAge.innerHTML +=`<div class='flex item'> ${array[i].age} </div>`;
    }
    userContainer.append(containerItemName);
    userContainer.append(containerItemLastName);
    userContainer.append(containerItemAge);

    console.log(array)
};

setUserData(data)


// найти инпуты, получить их вэлью, запихинуть в объект и по клику на кнопку этот объект пушить в массив


// function setUserData() {
//     const divElement = document.createElement('div');
//     userContainer.append(divElement);
//     divElement.insertAdjacentHTML('afterend', `<div class='item'> ${data[0].firstName} </div>`);
//     divElement.insertAdjacentHTML('afterend', `<div class='item'> ${data[1].firstName} </div>`);
//     divElement.insertAdjacentHTML('afterend', `<div class='item'> ${data[2].firstName} </div>`);
    
    // divElement.insertAdjacentHTML('afterbegin', `<div class='modal_item'> ${data[3].lastName} </div>`);
// }


modalCancelBtn.addEventListener('click', () => modalWindow.classList.add('hide'));

userAddBtn.addEventListener('click', () => modalWindow.classList.remove('hide'));
'use strict'
import {data} from './data.js';
import {setData} from './addUserfn.js';

const userAddBtn = document.getElementById('userAddBtn');
const modalWindow = document.getElementById('modal');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const userContainer = document.getElementById('userContainer');
const modalWindowAddBtn = document.getElementById('modalAddBtn');

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
};

setUserData(data)

// получить их вэлью, запихинуть в объект и по клику на кнопку этот объект пушить в массив

modalCancelBtn.addEventListener('click', () => modalWindow.classList.add('hide'));

userAddBtn.addEventListener('click', () => {
    modalWindow.classList.remove('hide')
    }
);

modalWindowAddBtn.addEventListener('click', ()=>  {
    data.push(setData);
    setData()
});

// modalCancelBtn.addEventListener('click', () => modalWindow.hidden = true);

// userAddBtn.addEventListener('click', () => modalWindow.hidden = false );
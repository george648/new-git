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
    let containerItem = document.createElement('div');
    for (let i=0; i < array.length; i++) {
        // containerItem.innerHTML =`<div class='flex'> ${array[i]} </div>`
        userContainer.insertAdjacentHTML('afterbegin', `<div class=''> ${array[i]} </div>`)   
    }
};

setUserData(data)

modalCancelBtn.addEventListener('click', () => modalWindow.classList.add('hide'));

userAddBtn.addEventListener('click', () => modalWindow.classList.remove('hide'));
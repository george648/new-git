import { data } from "./data.js";

const inputDataName = document.getElementById('input_data_name');
const inputDataLastName = document.getElementById('input_data__last_name');
const inputDataAge = document.getElementById('input_data_age');

function setData() {
    let firstName;
    let lastName;
    let age;
    inputDataName.value +=firstName; 
    inputDataLastName.value += lastName;
    inputDataAge.value += age;
    return function(firstName, lastName, age) {
        return {firstName, lastName, age}
    };  
};

export {setData};
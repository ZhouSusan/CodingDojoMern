//Predict Destructuring
//For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

//Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars 
const [ ,otherRandomCar ] = cars
//Predict the output- predications were correct 

console.log(randomCar); //logs 'Tesla'
console.log(otherRandomCar)//logs 'Mercedes'

//Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);// logs employee
console.log(otherName);// logs 'Elon'

//Prediction was wrong
//console.log(name); //logs - Reference error- name is not defined 


//Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output- predications were correct 
console.log(password);// logs '12345'
console.log(hashedPassword);// logs undefined 

//Problem 4 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;// 2
const [,,,second] = numbers;// 5
const [,,,,,,,,third] = numbers;// 2
//Predict the output- predications were incorrect
console.log(first == second);//false
console.log(first == third);//false => true 

//Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output- predications are correct 
console.log(key);//logs 'value'
console.log(secondKey);//logs [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//logs 1
console.log(willThisWork);// logs 5




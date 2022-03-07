//Return a new array with the square root of all element values:
const squareArr = (arr) => 
{
    return arr.map(Math.sqrt);
}
console.log(squareArr([4, 9, 16, 25, 36]));

//Multiply all the values in an array with 10
const multiplyValuesByTen = (arr) => {
    return arr.map(num => num*10);
}
console.log(multiplyValuesByTen([4, 9, 16, 25, 36]));
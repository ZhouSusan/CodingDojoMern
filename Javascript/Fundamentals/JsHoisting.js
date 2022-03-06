//Assignment: JavaScript Hoisting
//Rewrite the code the way it would be seen by the interpreter and predict the output. 

//1. orginal code
console.log(hello); //log undefined because the console.log is called with the hello function, before hello is declared and initialized
var hello = 'world'; 
//Predictions - were correct 
//var hello;
//console.log(hello); //logs undefined 
//hello = "world"

//ES6
console.log(hello);
let hello = 'world';
//console.log(hello);// can not access 'hello' before intialization
//let hello = world;

//2. original code
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//Predictions - were incorrect 
//var needle = haystack;
//function test()
//inside test()- var needle = "magnet"
//inside test()- console.log(needle) //magnet
//test(); // logs magnet

//ES6 
let needle = 'haystack';
test();
function test(){
    let needle = 'magnet';
    console.log(needle);
}
//Predictions - were correct 
//let needle = haystack;
//function test()
//inside test()- let needle = "magnet" //Error needle has already been declared 


//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
// console.log(brendan);
//Predictions are correct 
//var brendan = 'super cool;
//function print()
//inside print()- brendan = 'only okay';
//inside print()- console.log(brendan)
//console.log(brendan);//logs super cool

//3. ES6
let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// //Predictions are correct 
//var brendan = 'super cool;
//function print()
//inside print()- brendan = 'only okay';
//inside print()- console.log(brendan)
//console.log(brendan);//logs super cool

//4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//Predications are correct 
//var food = 'chicken';
//console.log(food); // logs chicken
//function eat()
//inside eat()=> food = 'half-chicken' 
//inside eat() => console.log(food); //logs 'half-chicken'
//inside eat() => var food = 'gone'
//eat(); //logs 'half-chicken'


//4. ES6
let food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}
//Predications are incorrect 
//let food = 'chicken';
//console.log(food); // logs chicken
//function eat()
//inside eat()=> food = 'half-chicken';// logs error : Cannot access 'food' before initialzation

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//Predictions 
//var mean = function() {
    //food = "chicken";
    //console.log(food)// logs undefined
    //var food = "fish";
    //console.log(food) // logs //fish
//}
//mean() //logs undefined, fish 
//console.log(food); //logs error - food is not defined
//console.log(food); //logs error food is not undefined


//Predictions were wrong
//mean()- Mean is not a function

//5. ES6
mean();
console.log(food);
let mean = function() {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);
//Predictions 
//mean(); logs mean is not a function

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//Predications
//var genre;
//console.log(genre); //log undefined 
//genre = "disco"
//function rewind ()  {
    //genre = "rock";
    //console.log(genre);// logs rock
    //var grene = "r&b"; logs genre is already declared 
//}
//console.log(genre)// logs disco

//Predications were wrong
//var genre;
//console.log(genre); //log undefined 
//genre = "disco"
//function rewind ()  {
    //genre = "rock";
    //console.log(genre);// logs rock
    //var grene = "r&b"; 
    //console.log(r&b); //logs r&b
//}
//console.log(genre)// logs disco

//6. ES6
console.log(genre);
let genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);
//Predications
//console.log(genre); //log Cannot access 'genre' before initialization 

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//Predications are correct 
//dojo = "san jose"; 
//console.log(dojo);// logs "san jose"
//function learn() {
    //dojo = 'seattle'
    //console.log(dojo); // logs "seattle"
    //var dojo = "burbank";
    //console.log(dojo);// logs "burbank"
//}
//console.log(dojo);// logs "san jose" 

//7. ES6
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//Predications 
//dojo = "san jose";
//console.log(dojo); //log Cannot access 'dojo' before initialization 


//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//Predications were half correct 
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
// }

// console.log(makeDojo("Chicago", 65));//  logs true
// console.log(makeDojo("Berkeley", 0));// logs Error message refering to line 242, Type Error Assignment to constant variable 
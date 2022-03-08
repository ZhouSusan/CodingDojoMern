const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList);
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods);

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes);

const evens = values.filter( val => val % 2 === 0 );
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(evens);
console.log(oddCubes)
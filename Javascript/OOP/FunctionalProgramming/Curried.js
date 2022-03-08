//uncurried
function ninjaBelt(ninja, beltColor) {
    console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
}
ninjaBelt('Eileen', 'black');

//Curried
function ninjaBelt(ninja) {
    return function belt(beltColor) {
        console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
    }
}
ninjaBelt('Mark')('red');
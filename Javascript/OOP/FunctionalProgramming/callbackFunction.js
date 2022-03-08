setTimeout(function() {
    console.log("start");
}, 3000);//milliseconds
console.log("end");

let exampleFunction = function(message) {
    console.log(message);
}

exampleFunction("Hello from example function");

function parentFunction (callback) {
    callback("information from the parent function");
}
console.log(parentFunction(exampleFunction));

parentFunction(function(message) {
    console.log(message);
});
parentFunction(exampleFunction("Hi from example function"));
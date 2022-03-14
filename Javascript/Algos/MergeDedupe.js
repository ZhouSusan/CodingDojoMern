// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeSortedArrays(arr1, arr2) {
    let outputArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            outputArr.push(arr1.shift());
        }
        else {
            outputArr.push(arr2.shift());
        }
    }

    while (arr1.length) {
        outputArr.push(arr1.shift());
    }

    while (arr2.length) {
        outputArr.push(arr2.shift())
    }

    return outputArr;
}

//create a function that takes two arrays, and return one array with no duplicates 
//create an result and store that with the concatation of both arrays and sort the result array
//and return a set- to filter any duplicates
function mergeDedupe(arr1, arr2) { 
    let result = mergeSortedArrays(arr1, arr2);
    let sortedObjArr = new Set([...result]);
    return [...sortedObjArr];;
}

console.log(mergeDedupe(arr1, arr2));
console.log(mergeDedupe(arrA,arrB));
// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])); // [ 1, 3, 4, 5, 8, 10 ]
console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])); // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]
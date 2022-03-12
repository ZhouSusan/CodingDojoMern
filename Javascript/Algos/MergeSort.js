// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) { 
    if (arr.length < 2) {
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let l = arr.slice(0, middle);
    let r = arr.slice(middle, arr.length);
    console.log('left', l);
    console.log('right', r);
    return mergeSortedArrays(mergeSort(l), mergeSort(r));
}

console.log(mergeSort(testArr));

// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
// test mergeSortedArrays(arr1, arr2) by passing test cases
var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
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
    console.log(outputArr);
    return outputArr;
}

console.log(mergeSortedArrays(mergeArr1, mergeArr2));
console.log(mergeSortedArrays(mergeArrA, mergeArrB));
console.log(mergeSortedArrays(arrLeft, arrRight));

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves (run mergeSort on those 2 halves)
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a COPY of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);
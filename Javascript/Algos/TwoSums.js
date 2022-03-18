// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have EXACTLY ONE SOLUTION,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given arr = [2, 11, 7, 15], target = 9,
// Because arr[0] + arr[2] = 2 + 7 = 9
// return [0, 2].

// example 1
// given: [2, 11, 7, 15]
// target: 9
// output: [0,2]

// example 2
// given: [3,2,4]
// target: 6
// output: [1,2]

// example 3
// given: [3,3]
// target: 6
// output: [0,1]
 
function twoSums(arr, target) {
    if (arr.length === 0 ) {
        return [];
    }
    let idxPair = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                idxPair.push(i, j);
            }
        }
    }
    return idxPair;
 }

 function twoSums2(arr, target) {
    const hashObj = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if(hashObj.hasOwnProperty([target-(current)])) {
            result.push(hashObj[target-current], i)
        }
        hashObj[current] = i;
    }
    return result;
 }

 function twoSums3(arr, target) {
    let obj = {}
    let comp;
    let outputArray = [];

    for(let i=0; i < arr.length; i++){
        comp = target - arr[i];
        if (obj.hasOwnProperty(arr[i])){
            outputArray.push(parseInt(obj.arr[i]));
            outputArray.push(i);
            break;
        }
        obj[comp] = i;

    }
    return outputArray;
}

function twoSums4(arr, target) {
    let l = 0,
        r = l;
    while (l < arr.length) {
        if (r < arr.length) {
            if (l != r && arr[l] + arr[r] == target) {
                return [l, r];
            }
            r++;
        } else {
            r = l + 1;
            l++;
        }
    }
    return "No Solution";
}

// console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
// console.log(twoSums([3, 2, 4], 6)); // [1,2]
// console.log(twoSums([3, 3], 6)); // [0,1]

// console.log(twoSums2([2, 11, 7, 15], 9)); // [0,2]
// console.log(twoSums2([3, 2, 4], 6)); // [1,2]
// console.log(twoSums2([3, 3], 6)); // [0,1]


console.log(twoSums3([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums3([3, 2, 4], 6)); // [1,2]
console.log(twoSums3([3, 3], 6)); // [0,1]
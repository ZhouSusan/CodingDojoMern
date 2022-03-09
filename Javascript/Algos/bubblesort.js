// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/

//Approach
//create a function that take in an array of numbers and a default parameter(length of the array) 
//and return a sorted array
//loop through the array, and check if the first number is greater than the second number of the array
//if the first number is larger, than swap both values
//recursively call the bubble sort, and pass in the array and the remaining items in the array, since we know the 
//largest value moves to the end 
//return the array when it is done 
const bubbleSort = (nums, leng = nums.length) => {
    if (leng <= 1) {
        return nums;
    }
    for (let i = 0; i < leng-1; i++) {
        if (nums[i] > nums[i+1]) {
            let temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
        }
        bubbleSort(nums, leng-1);
    }
    return nums;
}

function arraysIsEqual(actual, expected, testName="Bubble sort") {
    let sameSize = actual.length === expected.length;
    let sameValues = true;
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            sameValues = false;
            break;
        }
    }
    if (sameSize && sameValues) {
        console.log("Test passed.")
    } else {
        console.log(`${testName} failed. We expected ${expected}, but got ${actual}.`);
    }
}

const nums1 = [5,3,4,2,1];
const actual1 = bubbleSort(nums1);
const expected1 = [1, 2, 3, 4, 5];
arraysIsEqual(actual1, expected1);

const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const actual2 = bubbleSort(nums2);
const expected2 = [1, 2, 3, 4, 5, 6, 7, 8,  9, 10];
arraysIsEqual(actual2, expected2);

const actual3 = bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
const expected3 = [1, 2, 3, 4, 5, 6, 7, 8,  9, 10];
arraysIsEqual(actual3, expected3);

const actual4 = bubbleSort([5, 10 ,1]);
const expected4 = [1, 5, 10]
arraysIsEqual(actual4, expected4);
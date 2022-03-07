const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr.pop();
    let left = [];
    let right = [];
    let sortedArr = [];

    const state = new Set(arr);
    const newArr = [...state];
    for (let i = 0; i < newArr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return sortedArr.concat(quickSort(left), pivot, quickSort(right));
} 

const arrOne = [1, 2, 3, 1, 0 ,9 , 14, 8, 7, 12, 13, 5];
console.log(quickSort(arrOne));
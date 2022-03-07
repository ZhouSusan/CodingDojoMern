const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr.pop();
    let left = [];
    let right = [];
    let sortedArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    let output =  sortedArr.concat(quickSort(left), pivot, quickSort(right));
    //remove any duplicates 
    let resultArr = [...new Set(output)];
    return resultArr;
} 

const arrOne = [1, 2, 3, 1, 0 ,9 , 14, 8, 7, 12, 13, 5];
console.log(quickSort(arrOne));
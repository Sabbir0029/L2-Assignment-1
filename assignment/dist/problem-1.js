"use strict";
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);

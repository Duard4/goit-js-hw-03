"use strict";

/**
 * Used filter to apply if statement to each element of array
 * through anonymous funtion with single param - element of array
 * 
 * @param {Array} arr 
 * @param {Number} value 
 * @returns 
 */
function filterArray(arr, value) {
    const filteredArray = [];
    for (const el of arr) {
        if (el > value) filteredArray.push(el);
    }
    return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

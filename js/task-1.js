"use strict";

/**
 * Used basic String methods, toLowerCase and replaceAll
 * to shift all letters to lower case and replace spaces with hyphen
 * 
 * @param {String} input 
 * @returns 
 */
function slugify(input) {
    return input.toLowerCase().replaceAll(" ", "-"); 
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// for(let i = 0; i < str.length; i++) {
//   //accessing index of string character
//   // 1. str[i]
//   // 2. str.charAt(i)

//   // if(vowels.indexOf(str[i]) !== -1) vowelsCount++;

//   if(vowels.includes(str[i])) vowelsCount++;
// }

//map, reduce, forEach are absent in string prototype

// However can iterate over string using for..of loop
// for(let s of str) {
//   if(vowels.includes(s)) vowelsCount++;
// }

// console.log(vowelsCount);
// 8

//using filter method
let count = (vowels, arr) => {
  const filtered = arr.filter( i =>  vowels.includes(i))
  return filtered.length
}
 
console.log(count(vowels , str.split('')));

//strings are instance of string object, so although being primitive
// under the hood its treated as an object
// Eg: var str = new String("Hello")

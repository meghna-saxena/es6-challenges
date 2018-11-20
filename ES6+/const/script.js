/* CHALLANGE 2 - Const
Answer following Qustions:
  1. Why no error is generated after the line 14?
  2. Why after the line 19 TypeError is generated?

Change one line of code so, that error will go away.
Don't change lines 14, 19.
*/

"use strict";

let arr = [1, 2];
//change const with let

arr.push(3); //array is a reference type, can add/remove elements from array. 
//Pointer that points to the value is not changed, just the value of array is changed

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4]; //reassigning values of array, in this case new pointer is created
// BEFORE: Uncaught TypeError:
//   Assignment to constant variable.
// AFTER: No error

console.log(arr);
// [1, 2, 3, 4]


//avoid const with array and objects in js, that are reference types, you can change value
//but not ressign it
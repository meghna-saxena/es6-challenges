/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

Object.prototype.new = 500;

const sumObjectValues = (object) => {
  let total = 0;
  for (let k in object) {
    if (typeof object[k] === "number" && object.hasOwnProperty(k)) total += object[k];
  }
  return total;
}

console.log(sumObjectValues(nums));
//42

//nums instanceof Object 
//true

//Strings and arrays have Symbol.iterator method

// for..in loops iterate over keys of object
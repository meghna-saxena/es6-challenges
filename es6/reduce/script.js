/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

// Write code here
const sum = (...args) => { //rest operator, array of arguments
  let total;
  total = args.reduce((acc, elem) => acc + elem, 0)
  console.log(total);
}


const sumWithLoop = (...args) => { //rest operator, array of arguments
  let total = 0;
  for (var i = 0; i < args.length; i++) {
    total = total + args[i]
  }
  console.log(total);
}

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110

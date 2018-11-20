/* CHALLENGE 3 - Let

Change code to match output.
*/

"use strict";

var i = 10;

for (let i = 0; i < 5; i++) {
  //change var to let, for block scoping 
  //so that variable i defined here and the globally defined i are different

  console.log(i);
}

console.log(i);
// BEFORE: 5
// AFTER: 10

/* CHALLENGE 12 - Copy Array

Create copy of the a array.
*/

"use strict";

var a = [1, 2, 3, [4, 5]];

var b;

// b = a //copies pointer, both a ad b points to same object in memory

b = a.slice();
// b = [...a]

b.push("newElement");
b[3].push(6) //in case of nested array again pointers are copied

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]

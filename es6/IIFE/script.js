/* CHALLENGE 17 - IIFE (Immediately Invoked Function Expression)

Complete IIFE that will expose following methods:
  greet() - It will take one argument and return greeting string
  changeGreeting() - It will change greeting string

Initial greeting string "Hey, that's" must be defined inside IIFE.
*/

"use strict";

// IIFE
// var a = (() => {
//   var ..
//   function fn1(..) { }
//   function fn2(..) { }

//   return {
//     fn1,
//     fn2
//   }
// })();

// a.fn1(..)
// a.fn2(..)

var greeting = (() => {
  let greetingString = "Hey, that's";

  const greet = (name) => {
    return `${greetingString} ${name}`;
  }

  const changeGreeting = (newGreeting) => {
    greetingString = newGreeting;
  }

  return {
    greet: greet,
    changeGreeting: changeGreeting
  }
})();

console.log(greeting.greet("Bob"));
// Hey, that's Bob

console.log(
  greeting.changeGreeting("Good Morning from")
);
// undefined

console.log(greeting.greet("Emily"));
// Good Morning from Emily

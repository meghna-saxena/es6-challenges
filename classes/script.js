/* CHALLENGE 18 - Classes

Rewrite code below using ES6 Classes
*/

"use strict";

// var Fruit = function (title, price) {
//   this.title = title; //func fruits creates new obj and assigns this to new obj
//   this.price = price;
// };

// Fruit.prototype.priceInfo = function () {
//   return `Price of one ${this.title} is \
// ${this.price}$`;
// };


class Fruit {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  priceInfo() {
    return `Price of one ${this.title} is \
${this.price}$`;
  }
}

var apple = new Fruit("Apple", 2);
console.log(apple.priceInfo());
// Price of one Apple is 2$

var orange = new Fruit("Orange", 3);
console.log(orange.priceInfo());
// Price of one Orange is 3$


// Prototype defines all methods that will be available for all objects
//created using `this` func constructor. Each object that is created using `new` 
//keyword invokes constructor. So it has access to methods defined in its prototype

// apple.__proto__ === orange.__proto__
//true

// In javascript each function is a function constructor
// ES6 classes allows to combine function constructor and prototype methods in one place
//type of class === function
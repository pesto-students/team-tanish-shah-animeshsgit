//"use strict";

const person = {};

Object.defineProperty(person, "name", {
  value: "Random Guy",
  writable: false,
})

Object.defineProperty(person, "email", {
  value: "random@guy.com",
  writable: false,
})

Object.defineProperty(person, "age", {
  value: 27,
  writable: true,
})

Object.defineProperty(person, "getAge", {
  value: function() {return this.age}
})

Object.defineProperty(person, "setAge", {
  value: function(age){this.age = age}
})

console.log(person); //output : {name: 'Random Guy', email: 'random@guy.com', age: 27, getAge: ƒ, setAge: ƒ}
console.log(person.name); //output : Random Guy
console.log(person.email); //output : random@guy.com
console.log(person.age); //output : 27
console.log(person.getAge()); //output : 27
person.setAge(25);
console.log(person.getAge()); //output : 25
person.age = 20; //write only
person.age = 23; //write only
person.name = "adsjkhkd"; //ignore
console.log(person.getAge()); //output : 23
console.log(person.age); //output : 23
console.log(person.name); //output : Random Guy

//===========================

// Create a JavaScript object called Vehicle with properties make, model, and year.
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Add a method called getDetails() that returns a string with the vehicle's make, model, and year.
Vehicle.prototype.getDetails = function () {
  return (`Manufacturer is ${this.make}, model is ${this.model}, year is ${this.year}`);
};

// Create a subclass called Car that extends Vehicle with an additional property numDoors.
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  // Override the getDetails() method in Car to include the number of doors in the string that is returned.
  getDetails() {
    return (`${super.getDetails()}, number of doors are ${this.numDoors}.`);
  }
}

// Create an instance of Vehicle and an instance of Car, and call the getDetails() method on each instance, logging the result to the console.
const vehicle = new Vehicle("Ford", "Mustang EcoBoost Premium Convertible", 2023);
const car = new Car("Chevrolet", "Corvette", 2023, 4);

console.log(vehicle.getDetails()); // Honda Accord 2023
console.log(car.getDetails()); // Toyota Camry 2023 4
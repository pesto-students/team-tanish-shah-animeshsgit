"use strict";

class Person {
    constructor(Name, Age, Gender, Nationality) {
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Nationality = Nationality;
    }

    introduce() {
        return console.log(`My name is ${this.Name}, I am ${this.Age} years old, I am ${this.Gender}, and I am ${this.Nationality}.`);
    }
}

//Below are 3 instances of Person class
const p1 = new Person("John", 25, "male", "American");
const p2 = new Person("Jane", 30, "female", "Canadian");
const p3 = new Person("Bob", 20, "male", "Australian");

p1.introduce(); //OUTPUT: My name is John, I am 25 years old, I am male, and I am American.
p2.introduce(); //OUTPUT: My name is Jane, I am 30 years old, I am female, and I am Canadian.
p3.introduce(); //OUTPUT: My name is Bob, I am 20 years old, I am male, and I am Australian.

class Student extends Person {
    constructor(Name, Age, Gender, Nationality, Subject) {
        super(Name, Age, Gender, Nationality)
        this.Subject = Subject;
    }

    study() {
        return console.log(`I am studying ${this.Subject}.`)
    }
}

//Below is a instances of Student class which extends Person class
const std1 = new Student("Sarah", 18, "female", "British", "Computer Science");

std1.introduce(); //OUTPUT: My name is Sarah, I am 18 years old, I am female, and I am British.
std1.study(); //OUTPUT: I am studying Computer Science.



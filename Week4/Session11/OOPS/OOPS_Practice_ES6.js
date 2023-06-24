//Section1: Inheritance
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        console.log(`Driving ${this.make} ${this.model}.`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
        this.isAvailable = isAvailable;
    }
}

//
//
//=======================================================================================
//
//

//Section2: Polymorphism
class Shape {
    calculateArea() {
    }
}

class Rectangle extends Shape {
    calculateArea(width, height) {
        let area = width * height;
        console.log(area);
    }
}

class Triangle extends Shape {
    calculateArea(base, height) {
        let area = (base * height) / 2;
        console.log(area);
    }
}

class Circle extends Shape {
    calculateArea(radius) {
        let area = Math.PI * radius * radius;
        console.log(area);
    }
}

//Demo for rectangle
const rect = new Rectangle();
rect.calculateArea(10, 5); //OUTPUT: 50

//Demo for triangle
const triangle = new Triangle();
triangle.calculateArea(10, 5); //OUTPUT: 25

//Demo for circle
const circle = new Circle();
circle.calculateArea(5); //OUTPUT: 78.539

//
//
//=======================================================================================
//
//

//Section 3 – Abstraction and encpasulation:
class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;
    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(amount) {
        this.#balance = amount;
    }
}

class CheckingAccount extends BankAccount {

    deposit(amount) { //Deposit amount in savings
        let balance = this.getBalance();
        balance += amount;
        this.setBalance(balance);
        console.log("Amount of -> " + amount + " was deposited, updated balance is -> " + this.getBalance());
    }

    withdraw(amount) {
        let balance = this.getBalance();
        balance -= amount;
        this.setBalance(balance)
        console.log("Amount of " + amount + " was withdrawn. Updated balance is " + this.getBalance());
    }

}

class SavingsAccount extends BankAccount {

    deposit(amount) { //Deposit amount in savings
        let balance = this.getBalance();
        balance += amount;
        this.setBalance(balance);
        console.log("Amount of -> " + amount + " was deposited, updated balance is -> " + this.getBalance());
    }

    withdraw(amount) {
        let balance = this.getBalance();
        if (balance >= amount) { //If balance is low than desired amount withdrawl won't happen
            balance -= amount
            this.setBalance(balance);
            console.log("Amount of " + amount + " was withdrawn. Updated balance is " + this.getBalance());
        }
        else{
            console.log("Insufficient balance");
        }
    }
}

const check = new CheckingAccount(1111, 1000, "Bruce");
const save = new SavingsAccount(2222, 100, "Tony");

check.withdraw(350); //Amount of 350 was withdrawn. Updated balance is 650
check.deposit(500); //Amount of -> 500 was deposited, updated balance is -> 1150
console.log("Current balance is -> "+check.getBalance()); //Current balance is -> 1150

save.withdraw(350); //Insufficient balance
save.deposit(500); //Amount of -> 500 was deposited, updated balance is -> 600
console.log("Current balance is -> "+save.getBalance()); //Current balance is -> 600
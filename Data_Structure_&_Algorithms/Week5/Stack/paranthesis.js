class Stack{
    constructor(){
        this.item = [];
    }

    append(value){
        return this.item.push(value);
    }

    rem(){
        if(this.item.length == 0){return "underflow"}
        return this.item.pop();
    }

    isEmpty(){
        let stack = this.item;
        if(stack.length == 0){
            return true;
        }
        else return false;
    }

    peek(){
        if(this.item.length == 0){return "underflow"}
        return this.item[this.item.length-1];
    }

    printStack(){
        return console.log(this.item)
    }
}

// ## Problem Name:
// Valid Parentheses

// ## Problem Statement:
// Write a JavaScript function that takes a string 
// containing only parentheses ('(', ')', '{', '}', '[', ']') and 
// returns true if the parentheses are valid and 
// balanced, and false otherwise.

// Implement the function to validate the parentheses 
// string and use prompt to take input from the user.

let data = ['(',')','{','}'];
let data2 = ['(','(','(',')',')',')'];

let input = new Stack();
let input2 = new Stack();

isBalanced(input); //Balanced
isBalanced(input2); //Balanced

function isBalanced(input){
    for(let i of data){
        if(i == '('){
            input.append(')');
        }
        else if(i == '{'){
            input.append('}');
        }
        else if(i == '['){
            input.append(']');
        }
        else if(input.rem() != i){
            console.log("Fail")
            return false;
        }
    }
    
    if(input.isEmpty()){
        console.log("Balanced")
    }
    else
    console.log("Not-Balanced")
}

// TC is O(n)
class Stack{
    constructor(){
        this.item = [];
    }

    append(value){
        this.item.push(value);
        return this.item;
        // return this.item.push(value);
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
// Next Greater Element

// ## Problem Statement:
// Given an array of integers, find the next greater 
// element for each element in the array. The next 
// greater element for an element num is the first 
// greater element to its right. If no such element exists,
// consider it as -1.

// Implement a JavaScript function that takes an array 
// of integers and returns an array of the next greater 
// elements.

let input = [5, 3, 8, 4, 2, 7, 1]
let n = input.length;
isGreater(input, n) // [ 8, 8, -1, 7, 7, -1, -1 ]

let input1 = [5, 4, 3, 2, 1]
let n1 = input1.length;
isGreater(input1, n1) // [ -1, -1, -1, -1, -1 ]

function isGreater(input, n){
    let s = new Stack();
    let ans = [];
    for(let i = n-1; i>=0; i--){
        while(!s.isEmpty() && s.peek()<=input[i]){
            s.rem();
        }
        // console.log(s.peek());
        if(s.isEmpty()){ans.push(-1)}
        else {
            // console.log(s.peek());
            ans.push(s.peek())
        }
        s.append(input[i]);
    }
    console.log(ans.reverse());
}

// TC is O(n)
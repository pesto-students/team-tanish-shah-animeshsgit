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

// Evaluate Reverse Polish Notation

// Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN). 
// The expression is given as an array of tokens where each token can be an operator or
//  an integer operand.

// The valid operators are +, -, *, and /. Each operand and operator is separated 
// by a space.

let token = [2, 3, 4, '*', '+'];
let token2 = [1, 2, '+', 3, 4, 5, '*', '+', '*'];

isRPN(token); // 14
isRPN(token2); // 69

function isRPN(token){
    let s = new Stack();
    let ans = 0;
    for(let i of token){
        if( !s.isEmpty() && (i == '+' || i == '-' || i == '/' || i == '*')){
            let a = s.rem();
            let b = s.rem();
            ans = eval(a + i + b);
            s.append(ans);
        }
        else(s.append(i))
    }
    console.log(ans);
}

// TC is O(n)
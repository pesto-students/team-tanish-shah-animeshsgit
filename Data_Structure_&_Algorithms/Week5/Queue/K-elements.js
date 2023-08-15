class Queue{
    constructor(){
        this.item = [];
    }

    enque(value){
        this.item.push(value);
        return this.item;
        // return this.item.push(value);
    }

    deque(){
        if(this.item.length == 0){return "underflow"}
        return this.item.shift();
    }

    isEmpty(){
        let queue = this.item;
        if(queue.length == 0){
            return true;
        }
        else return false;
    }

    peek(){
        if(this.item.length == 0){return "underflow"}
        return this.item[0];
    }

    printQueue(){
        return console.log(this.item)
    }
}

class Stack {
    constructor() {
        this.item = [];
    }

    append(value) {
        this.item.push(value);
        return this.item;
        // return this.item.push(value);
    }

    rem() {
        if (this.item.length == 0) { return "underflow" }
        return this.item.pop();
    }

    isEmpty() {
        let stack = this.item;
        if (stack.length == 0) {
            return true;
        }
        else return false;
    }

    peek() {
        if (this.item.length == 0) { return "underflow" }
        return this.item[this.item.length - 1];
    }

    printStack() {
        return console.log(this.item)
    }
}

let initial = [10, 20, 30, 40, 50];
let q = new Queue();
initial.map((element) => { q.enque(element) });
kElements(q, 2)

let initial1 = [1, 2, 3, 4, 5, 6, 7];
let q1 = new Queue();
initial1.map((element) => { q1.enque(element) });
kElements(q1, 3)

function kElements(q, n){
    let s = new Stack();
    let ans = new Queue();

    while(n>0){
        s.append(q.deque());
        n--;
    }

    while(!s.isEmpty()){
        ans.enque(s.rem());
    }

    while(!q.isEmpty()){
        ans.enque(q.deque());
    }

    ans.printQueue();
}

// TC is O(1)
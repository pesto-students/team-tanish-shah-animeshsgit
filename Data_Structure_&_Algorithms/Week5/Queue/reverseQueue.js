class Queue {
    constructor() {
        this.item = [];
    }

    enque(value) {
        this.item.push(value);
        return this.item;
        // return this.item.push(value);
    }

    deque() {
        if (this.item.length == 0) { return "underflow" }
        return this.item.shift();
    }

    isEmpty() {
        let queue = this.item;
        if (queue.length == 0) {
            return true;
        }
        else return false;
    }

    peek() {
        if (this.item.length == 0) { return "underflow" }
        return this.item[0];
    }

    printQueue() {
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

testcase1(); // [ 5, 4, 3, 2, 1 ]
testcase2(); // [ 50, 40, 30, 20, 10 ]

function testcase1() {
    let initial = [1, 2, 3, 4, 5];
    let q = new Queue();
    initial.map((element) => { q.enque(element) });

    let s = new Stack();
    while (!q.isEmpty()) {
        s.append(q.deque());
    }

    while (!s.isEmpty()) {
        q.enque(s.rem());
    }

    q.printQueue();
}

function testcase2() {
    let initial = [10, 20, 30, 40, 50];
    let q = new Queue();
    initial.map((element) => { q.enque(element) });

    let s = new Stack();
    while (!q.isEmpty()) {
        s.append(q.deque());
    }

    while (!s.isEmpty()) {
        q.enque(s.rem());
    }

    q.printQueue();
}

// TC is O(n)
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

let initial = [5, 2, 8, 3, 9, 4];
let initial2 = [2, 4, 6, 8, 10];

reArrange(initial);
reArrange(initial2);

function reArrange(initial) {
    let q = new Queue();
    initial.map((element) => { q.enque(element) })
    let q2 = new Queue();
    let ans = new Queue();

    while (!q.isEmpty()) {
        if (q.peek() % 2 == 0) {
            ans.enque(q.deque());
        }
        else q2.enque(q.deque());
    }

    while (!q2.isEmpty()) {
        ans.enque(q2.deque());
    }

    ans.printQueue();
}

// TC is O(n)
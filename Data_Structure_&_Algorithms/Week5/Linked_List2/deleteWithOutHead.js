class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        if (this.head == null) {
            this.head = new Node(value);
            this.size += 1;
            return;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
            this.size += 1;
        }
    }

    addNode(value) {
        if (this.head == null) {
            this.head = value;
            this.size += 1;
            return;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = value;
            this.size += 1;
        }
    }

    showAll() {
        let current = this.head;
        let ans = "";
        while (current) {
            ans += '->';
            ans += current.value;
            current = current.next;
        }
        return ans;
    }

    showArray() {
        let current = this.head;
        let ans = [];
        while (current) {
            //ans += '->';
            ans.push(current.value);
            current = current.next;
        }
        return ans;
    }

    printAll(LL) {
        console.log(LL.showAll());
    }
}


let input = new SinglyLL();

let a = new Node(10);
let b = new Node(20);
let c = new Node(30);
let d = new Node(40);
let e = new Node(50);

input.addNode(a)
input.addNode(b)
input.addNode(c)
input.addNode(d)
input.addNode(e)

console.log(deleteIt(e));
console.log(deleteIt(c));

function deleteIt(element){
    if(element.next == null){
        return "Not possible"
    }
    element.value = element.next.value
    element.next = element.next.next;
    return input.showAll();
}

// TC is O(1)
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

// ## Problem Name:
// Sort a linked list of 0s, 1s and 2s

// ## Problem Statement:
// Given a linked list of 0s, 1s and 2s, 
// The task is to sort and print it.

let data = [1, 0, 2, 1, 2, 0, 2];
let input = new SinglyLL();
data.map((element) =>{input.add(element)})
sortIt(input)

function sortIt(list){
    let temp = list.head;
    let tArr = [0,0,0];
    while(temp){
        tArr[temp.value]++;
        temp =temp.next;
    }
    temp = list.head;
    let n =0;
    while(temp){
        if(tArr[n] == 0){n++;}
        else {
            temp.value = n;
            tArr[n]--;
            temp = temp.next;
        }
    }
    console.log(list.showAll()); //Output ->0->0->1->1->2->2->2
}

// TC is O(n)
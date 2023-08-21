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


// Subtract Two Numbers represented as Linked Lists

// Problem Statement:
// You are given two linked lists that represent two non-negative integers. 
// The digits are stored in reverse order, and each node of the linked list contains a 
// single digit. Your task is to subtract the second linked list from the first 
// linked list and return the result as a new linked list.

// Write a JavaScript program that takes input for the two linked lists and 
// performs the subtraction operation.

let list1 =new SinglyLL();
let list2 =new SinglyLL();

let l1 = [3, 2, 1]
let l2 = [1, 2]

l1.map((element) => {list1.add(element)})
l2.map((element) => {list2.add(element)})

subTwo(list1, list2)

function subTwo(list1, list2){
    let arr1 = []
    let arr2 = []

    let l1 = list1.head;
    let l2 = list2.head;

    while(l1){
        arr1.push(l1.value);
        l1 = l1.next;
    }
    while(l2){
        arr2.push(l2.value);
        l2 = l2.next;
    }

    arr1.reverse();
    arr2.reverse();

    let ans = (arr1.length > arr2.length)?(parseInt(arr1.toString().replaceAll(',','')) - parseInt(arr2.toString().replaceAll(',',''))):(parseInt(arr2.toString().replaceAll(',','')) - parseInt(arr1.toString().replaceAll(',','')));

    let finalAns = new SinglyLL();
    let a = String(ans).split("")
    a.map((element) => {finalAns.add(element)})
    console.log(finalAns.showAll())
}

// TC is O(n)
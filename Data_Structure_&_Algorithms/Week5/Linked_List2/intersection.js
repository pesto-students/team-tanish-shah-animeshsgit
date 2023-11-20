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
// Find intersection point of Y LinkedList

// ## Problem Statement:
// You are given two linked lists, list1 and list2. Your task
//  is to find the intersection point of these two linked 
// lists, if it exists. The intersection point is defined as 
// the node at which both lists merge and become 
// common.

// Write a program that takes input for the elements of 
// list1 and list2, and finds the intersection point. If there
//  is no intersection point, the program should output 
// "No Intersection Point".

testcase1();
testcase2();

function testcase1(){
let list1 = new SinglyLL();
let list2 = new SinglyLL();

let a = new Node(3);
let b = new Node(6);
let c = new Node(9);
let d = new Node(10);
let e = new Node(11);
let f = new Node(12);
let g = new Node(15);

list1.addNode(a)
list1.addNode(b)
list1.addNode(c)
list2.addNode(d)
list2.addNode(e)
list1.addNode(f)
list2.addNode(f)
list1.addNode(g)

console.log(getIntersection(list1, list2));

function getIntersection(list1, list2) {
    let aLen = getLength(list1);
    let bLen = getLength(list2);
    let diff = 0;

    if(aLen > bLen){
        diff = aLen - bLen;
        return getPoint(diff, list1, list2);
    }
    else if(aLen < bLen){
        diff = bLen-aLen;
        return getPoint(diff, list2, list1);
    }
    else if(aLen == bLen){
        diff = bLen-aLen;
        return getPoint(diff, list2, list1);
    }
}

function getLength(list) {
    let temp = list.head;
    let count = 0;
    while (temp) {
        count = count + 1;
        temp = temp.next;
    }
    return count;
}

function getPoint(diff, list1, list2){
    let temp = list1.head;
    let temp2 = list2.head;

    while(diff>0){
        temp = temp.next;
        diff--;
    }

    while(temp != null && temp2 != null){
        if(temp.value == temp2.value){
            return temp.value;
        }
        temp = temp.next;
        temp2 = temp2.next;
    }
    return "No Intersection Point";
}
}

//-----------------------------------------------------

function testcase2(){
    let list1 = new SinglyLL();
    let list2 = new SinglyLL();
    
    let a = new Node(3);
    let b = new Node(6);
    let c = new Node(9);
    let d = new Node(10);
    let e = new Node(11);
    let f = new Node(12);
    let g = new Node(15);
    
    list1.addNode(a)
    list1.addNode(b)
    list1.addNode(c)
    list2.addNode(d)
    list2.addNode(e)
    list1.addNode(f)
    list1.addNode(g)
    
    console.log(getIntersection(list1, list2));
    
    function getIntersection(list1, list2) {
        let aLen = getLength(list1);
        let bLen = getLength(list2);
        let diff = 0;
    
        if(aLen > bLen){
            diff = aLen - bLen;
            return getPoint(diff, list1, list2);
        }
        else if(aLen < bLen){
            diff = bLen-aLen;
            return getPoint(diff, list2, list1);
        }
        else if(aLen == bLen){
            diff = bLen-aLen;
            return getPoint(diff, list2, list1);
        }
    }
    
    function getLength(list) {
        let temp = list.head;
        let count = 0;
        while (temp) {
            count = count + 1;
            temp = temp.next;
        }
        return count;
    }
    
    function getPoint(diff, list1, list2){
        let temp = list1.head;
        let temp2 = list2.head;
    
        while(diff>0){
            temp = temp.next;
            diff--;
        }
    
        while(temp != null && temp2 != null){
            if(temp.value == temp2.value){
                return temp.value;
            }
            temp = temp.next;
            temp2 = temp2.next;
        }
        return "No Intersection Point";
    }
    }
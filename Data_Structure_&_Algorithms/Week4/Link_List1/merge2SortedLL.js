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
        let answ = [];
        while (current) {
            //ans += '->';
            answ.push(current.value);
            current = current.next;
        }
        return answ;
    }

    printAll(LL) {
        console.log(LL.showAll());
    }
}

//QUESTION!
// merge two sorted linked lists
// Write a JavaScript function to merge two sorted linked lists into a single sorted linked list.

let list1 = new SinglyLL();
list1.add(1);
list1.add(3);
list1.add(5);

let list2 = new SinglyLL();
list2.add(2);
list2.add(4);
list2.add(6);

let ans = new SinglyLL();
let len = list1.size +list2.size;
let l1 = list1.head;
let l2 = list2.head;

for(i=0; i<len; i++){
    let val1 = (l1 == null)? Number.MAX_VALUE :l1.value;
    let val2 = (l2 == null)? Number.MAX_VALUE :l2.value;
    (val1 < val2)? Li1() : Li2(); 
}

function Li1(){
    ans.add(l1.value);
    l1 = l1.next;
}

function Li2(){
    let curr = l2;
    ans.add(curr.value);
    l2 = l2.next;
}

console.log(ans.showArray());

//  TC is O(m+n)
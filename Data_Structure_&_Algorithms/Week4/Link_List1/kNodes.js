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

// Reverse every k nodes
// Implement a JavaScript function to reverse every k nodes in a linked list.

let input = [1, 2, 3, 4, 5, 6, 7, 8]
let k = 3;

let ans = new SinglyLL();
let li = new SinglyLL();
input.map((element) => {li.add(element)});

kNodes(li, k);

function kNodes(li, k){
    let list = li.head;
    let temp = [];
    let count = 0;
    for(let i =1; i<=li.size; i++){
        if(count<k){
            tempAdd();
        }
        else if(count == k){
            ansAdd();
            tempAdd()
        }

        if(i == li.size){
            ansAdd();
        }
        list = list.next;
    }
    function tempAdd(){
        temp.push(list.value);
        count++;
    }
    function ansAdd(){
        temp = temp.reverse();
        temp.map((element) => {ans.add(element)})
        count = 0;
        temp = [];
    }
}

ans.printAll(ans);

//  TC is O(n)
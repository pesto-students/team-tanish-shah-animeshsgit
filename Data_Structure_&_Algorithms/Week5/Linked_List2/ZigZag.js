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

// Zig-Zag Fashion

// You are given a linked list. Your task is to rearrange its elements in a zig-zag fashion. 
// The zig-zag fashion means rearranging the elements such that every other element is greater 
// than its previous and next elements. The order of the elements should be maintained.

// Write a JavaScript program that takes input for the elements of the linked list and 
// rearranges them in a zig-zag fashion.


let list = new SinglyLL();
let list2 = new SinglyLL();

let ar = [1,2,3,4,5]
let ar2 = [4,3,7,8,6,2,1]

ar.map((element) => {list.add(element)})
ar2.map((element) => {list2.add(element)})

zigZag(list); //->1->3->2->5->4
zigZag(list2); //->3->7->4->8->2->6->1

function zigZag(list) {
    let current = list.head;
    let isLesser = true;
    
    while (current.next) {
        if ((isLesser && current.value > current.next.value) || (!isLesser && current.value < current.next.value)) {
            // Swap values
            let temp = current.value;
            current.value = current.next.value;
            current.next.value = temp;
        }
        // console.log(current)
        current = current.next;
        isLesser = !isLesser;
    }
    list.printAll(list);
}

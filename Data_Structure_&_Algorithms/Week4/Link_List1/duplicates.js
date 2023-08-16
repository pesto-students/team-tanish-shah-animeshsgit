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

    printAll(LL) {
        console.log(LL.showAll());
    }
}


console.log(remDuplicate([1, 2, 3, 2, 4, 1]))

function remDuplicate(arr) {
    let initialLL = new SinglyLL();
    let ansLL = new SinglyLL();
    let mySet = new Set();

    arr.map((element) => {initialLL.add(element)})
    let ref = initialLL.head;

    while(ref.next){
        let value = ref.value;
        if(!mySet.has(value)){
            mySet.add(value);
            ansLL.add(value)
        }
        ref = ref.next;
    }
    
    return ansLL.showAll();
}

//  TC is O(n)
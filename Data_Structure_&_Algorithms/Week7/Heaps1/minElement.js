class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Given a min heap, find the minimum element.

// Input Format:
// The input will be an array representing the min heap.

// Testcase 1
console.log("TESTCASE 1")
let root = new Node(3);
root.left = new Node(8)
root.right = new Node(10)

root.left.left = new Node(15)
root.left.right = new Node(20)

rootHeap(root); //3

// Testcase 2
console.log("TESTCASE 2")
let root2 = new Node(1);
root2.left = new Node(2)
root2.right = new Node(3)

root2.left.left = new Node(4)
root2.left.right = new Node(5)

rootHeap(root2); //1
// -----------------------------------

function rootHeap(node){
    console.log(node.value)
}
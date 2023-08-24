class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Checking if Array Represents a Min Heap

// Problem Statement:
// Given an array of integers, write a function to determine 
// whether the array represents a min heap or not. 
// A min heap is a complete binary tree where the value of each node is 
// less than or equal to the values of its children.

// Testcase 1
console.log("TESTCASE 1")
let root = new Node(5);
root.left = new Node(10)
root.right = new Node(15)

root.left.left = new Node(20)
root.left.right = new Node(25)

let flag = true;
isMinHeap(root, 0);
console.log(flag); // true

// Testcase 2
console.log("TESTCASE 2")
let root2 = new Node(20);
root2.left = new Node(10)
root2.right = new Node(25)

root2.left.left = new Node(5)
root2.left.right = new Node(15)

flag = true;
isMinHeap(root2, 0);
console.log(flag); // false
// -----------------------------------

function isMinHeap(node, prev){
    if(node == null){return}
    else if(node.value<prev){
        flag = false; 
        return
    }
    isMinHeap(node.left, node.value)
    isMinHeap(node.right, node.value)
}
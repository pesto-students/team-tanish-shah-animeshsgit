class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Write a function to serialize a binary tree into a string representation.

// Input Format:
// The input for the serialization function is a binary tree represented by its root node. 
// The elements of the binary tree will be provided as a space-separated string.

// Testcase1--------------------
console.log("TESTCASE 1")
let root = new Node(1);
serial(root) // 1

// Testcase2--------------------
console.log("TESTCASE 2")
let root1 = new Node(1);
root1.left = new Node(2);
serial(root1) // 1, 2
// -------------------------------------------

function serial(root){
    let str = "->";
    serialize(root);
    function serialize(root){
        if(root != null){
            str += (root.value).toString() + ",";
            serialize(root.left);
            serialize(root.right);
        }
    }
    console.log(str);
}

// TC is O(n)
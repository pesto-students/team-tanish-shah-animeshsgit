class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Invert Binary Tree

// Problem Statement:
// Implement a function to invert a binary tree. 
// Given the root of a binary tree, the function should modify the 
// tree by swapping each node's left and right children.

//Testcase1--------------------
console.log ("TESTCASE 1")
let root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);

root.left.left = new Node(1);
root.left.right = new Node(3);

root.right.left = new Node(6);
root.right.right = new Node(9);

invert(root);

//Testcase1--------------------
console.log ("TESTCASE 2")
let root1 = new Node(10);
root1.left = new Node(5);
root1.right = new Node(15);

root1.left.left = new Node(3);
root1.left.right = new Node(8);

root1.right.left = new Node(12);
root1.right.right = new Node(18);

invert(root1);
// ------------------------------------------------

function invert(root){
    if(root != null){
        console.log(root.value);
        if(root.left != null && root.right != null){
            let temp = root.left;
            root.left = root.right;
            root.right = temp;
        }
        invert(root.left)
        invert(root.right)
    }
}

// TC is O(n)
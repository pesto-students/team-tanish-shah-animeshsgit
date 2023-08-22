class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Check Binary Search Tree

// Problem Statement:
// Write a function to check if a given binary tree is a Binary Search Tree (BST). 
// A Binary Search Tree is a binary tree where the values of all nodes in the left 
// subtree are less than or equal to the value of the root node, 
// and the values of all nodes in the right subtree are greater than 
// the value of the root node. Duplicate values are not allowed in a BST.

let flag = true;
// Testcase1-----------------
console.log("TESTCASE 1");
let root = new Node(5);
root.left = new Node(5)
root.right = new Node(3)

root.left.left = new Node(7)
root.left.right = new Node(2)

root.right.left = new Node(4)
root.right.right = new Node(1)

root.left.left.left = new Node(2)
root.left.left.right = new Node(3)

root.left.right.left = new Node(4)

isBST(root);
console.log( flag?"BST":"not BST" );

// Testcase2-----------------
flag = true;
console.log("TESTCASE 2");
let root1 = new Node(5);
root1.left = new Node(4)
root1.right = new Node(6)

// root1.left.left = new Node(3)
// root1.left.right = new Node(6)

// root1.right.left = new Node(4)
// root1.right.right = new Node(7) 

// root1.left.left.left = new Node(1)
// root1.left.left.right = new Node(4)

// root1.left.right.left = new Node(4)

isBST(root1);
console.log( flag?"BST":"not BST" );

// ----------------------------------------
function isBST(node){
    if(node.left == null && node.right == null){ return }

    else if(node.left.value >= node.value || node.right.value < node.value){ 
        flag = false;
        return;
    }
    isBST(node.left);
    isBST(node.right);
}

// TC is O(n)
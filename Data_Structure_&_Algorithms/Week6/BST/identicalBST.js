class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Check if Two Binary Trees are Identical

// Problem Statement:
// Write a function to check if two binary trees are identical. 
// Two binary trees are considered identical if they have the same 
// structure and the same values at each corresponding node.

// Testcase1-----------------
console.log("TESTCASE 1");
let root = new Node(1);
root.left = new Node(2)
root.right = new Node(3)

let root1 = new Node(1);
root1.left = new Node(2)
root1.right = new Node(3)

let flag = true;
isBSTIdentical(root, root1)
console.log(flag) // true

// Testcase2-----------------
console.log("TESTCASE 2");
let root2 = new Node(1);
root2.left = new Node(2)
root2.right = new Node(3)

let root21 = new Node(1);
root21.left = new Node(3)
root21.right = new Node(2)

flag = true;
isBSTIdentical(root2, root21)
console.log(flag) // false

// ------------------------------------------------------
function isBSTIdentical(node, node1){
    if(node == null && node1 == null){ 
        return 
    }

    else if (node == null || node1 == null){ 
        flag == false;
        return;
    }

    else if(node.value != node1.value){
        flag = false;
    }
    isBSTIdentical(node.left, node1.left)
    isBSTIdentical(node.right, node1.right)
}
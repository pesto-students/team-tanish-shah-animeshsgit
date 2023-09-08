class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Calculate Height of Binary Tree
// Problem Statement:
// Write a function to calculate the height of a binary tree.

// Testcase1--------------------------
let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);

root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(checkHeight(root)); // 3

// Testcase2--------------------------
let root2 = new Node(10);
root2.left = new Node(5);
root2.right = new Node(20);

root2.left.left = new Node(3);
root2.left.right = new Node(8);

root2.right.right = new Node(25);

root2.right.right.left = new Node(7);

console.log(checkHeight(root2)); // 4

//------------------------------------
function checkHeight(root){
    if(root == null){
        return 0;
    }
    let l = checkHeight(root.left);
    let r = checkHeight(root.right);

    return Math.max(l, r)+1;
}

// TC is O(n)
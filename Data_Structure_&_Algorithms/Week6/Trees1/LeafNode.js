class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Count Number of Leaf Nodes in Binary Tree
// Problem Statement:
// Write a function to count the number of leaf nodes in a binary tree.

//Testcase1
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.right = new Node(6);

leafNode(root); //3

//Testcase2
let root1 = new Node(1);
root1.right = new Node(2);

root1.right.left = new Node(3);

leafNode(root1); // 1
// -----------------------------------

function leafNode(root){
    let count = 0;
    traverseal(root);

    function traverseal(node){
        if(node != null){
            if(node.left == null  && node.right==null){
                count++;
            }
            traverseal(node.left);
            traverseal(node.right);
        }
    }
    console.log(count);
}

// TC is O(n)
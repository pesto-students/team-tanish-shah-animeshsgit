class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Is Tree a Subtree ?

// ## Problem Statement:
// Check if a given tree is a subtree of another tree?

// Testcase1-----------------
console.log("TESTCASE 1");
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);

let root1 = new Node(2);
root1.left = new Node(4);
root1.right = new Node(5);

isSubtree(root, root1);

function isSubtree(root,root1){
    if(root != null){
        if(root.value == root1.value){
            if((root.left.value == root1.left.value) &&(root.right.value == root1.right.value)){
                console.log("yes")
            }
        }
        isSubtree(root.left, root1);
        isSubtree(root.right, root1);
    }
}

// TC is O(n)
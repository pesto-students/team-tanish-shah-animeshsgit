class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Root to Leaf Path Sum

// Problem Statement:
// Determine if there is a root to leaf path with a given sum in a tree.

// Testcase1-----------------
let requireNum = 22;
let flag = false;

console.log("TESTCASE 1");
let root = new Node(5);
root.left = new Node(4)
root.right = new Node(8)

root.left.left = new Node(11)
// root.left.right = new Node(4)

root.right.left = new Node(13)
root.right.right = new Node(4)

root.left.left.left = new Node(7)
root.left.left.right = new Node(2)

preOrder(root, 0);
console.log( flag );

function preOrder(node, current){
    if(node == null){
        if(current == requireNum){
            flag = true;
        }
        else if(current != 22){
            current = 0;
        }
        return
    }

    else if(node != null){
        current += node.value;
        preOrder(node.left, current);
        preOrder(node.right, current);
    }
}

// TC is O(n)
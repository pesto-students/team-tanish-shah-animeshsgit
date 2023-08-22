class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Maximum Path Sum in Binary Tree

// Problem Statement:
// Write a function to find the maximum path sum in a binary tree.

// Testacse 1
console.log("TESTCASE 1")
let root =new Node(1);
root.left = new Node(2)
root.right = new Node(3)

// root.left.left = new Node(3)
root.left.right = new Node(5)

root.right.left = new Node(6)
root.right.right = new Node(7)

let maxSum = 0;
let ans = 0;
pathSum(root, maxSum);
console.log(`Max Sum is ${ans}`); // 11

// Testacse 2
console.log("TESTCASE 2")
let root2 =new Node(1);
root2.left = new Node(2)
root2.left.left = new Node(3)
root2.left.left.left = new Node(4)
root2.left.left.left.left = new Node(5)

maxSum = 0;
ans = 0;
pathSum(root2, maxSum);
console.log(`Max Sum is ${ans}`); // 15
// ---------------------------------------------------------

function pathSum(root, maxSum){
    if(root == null) {
        ans = Math.max(ans, maxSum);
        maxSum = 0;
        return
    }
    maxSum += root.value;
    pathSum(root.left, maxSum)
    pathSum(root.right, maxSum)
}

// TC is O(n)
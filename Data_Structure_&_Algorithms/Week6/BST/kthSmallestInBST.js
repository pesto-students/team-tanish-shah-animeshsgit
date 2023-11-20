class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Write a function to find the kth smallest element in a Binary Search Tree (BST)

// Testacse 1
console.log("TESTCASE 1")
let root =new Node(5);
root.left = new Node(3)
root.right = new Node(6)

root.left.left = new Node(2)
root.left.right = new Node(4)

root.left.left.left = new Node(1)

let k = 3;
kSmallest(root, k); // 3

function kSmallest(node, k){
    let arr = [];
    driver(node, arr)
    function driver(node, arr){
        if(node == null){ return}
        driver(node.left, arr)
        arr.push(node.value);
        driver(node.right, arr)
    }
    console.log(arr[k-1]);
}

// TC is O(n)
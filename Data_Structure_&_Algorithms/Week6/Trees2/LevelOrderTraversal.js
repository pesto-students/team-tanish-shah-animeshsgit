class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Queue{
    constructor(){
        this.item = [];
    }

    enque(value){
        this.item.push(value);
        return this.item;
        // return this.item.push(value);
    }

    deque(){
        if(this.item.length == 0){return "underflow"}
        return this.item.shift();
    }

    isEmpty(){
        let queue = this.item;
        if(queue.length == 0){
            return true;
        }
        else return false;
    }

    peek(){
        if(this.item.length == 0){return "underflow"}
        return this.item[0];
    }

    printQueue(){
        return console.log(this.item)
    }
}

// Level Order Traversal of Binary Tree

// Problem Statement:
// Write a function to print the nodes of a binary tree in a level order traversal

// Testcase1-----------------
let root = new Node(5);
root.left = new Node(1);
root.right = new Node(2);

root.left.left = new Node(3);
root.left.right = new Node(4);

root.right.left = new Node(5);
root.right.right = new Node(1);

root.left.left.left = new Node(2);
root.left.left.right = new Node(3);

root.left.right.left = new Node(4);

LOT(root); //  5 1 2 3 4 5 1 2 3 4

function LOT(root){
    if(root == null){ return };

    let queue = new Queue();
    queue.enque(root);
    while(!queue.isEmpty()){
        let node = queue.deque();
        console.log(node.value);
        if(node.left != null){queue.enque(node.left)}
        if(node.right != null){queue.enque(node.right)}
    }

}


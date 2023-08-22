class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Lowest Common Ancestor

// Problem Statement:
// Implement a function to find the lowest common ancestor of two nodes in a binary tree

// Testcase1-----------------
console.log("TESTCASE 1");
let root = new Node(5);
root.left = new Node(1)
root.right = new Node(2)

root.left.left = new Node(3)
root.left.right = new Node(4)

root.right.left = new Node(5)

console.log(isAncestor(root, 2, 4)) // 5

function isAncestor(node, n1, n2){
        if (node == null){ 
            return null;
        }
  
        if (node.value == n1 || node.value == n2){
            return node.value;
        }
  
        let left_lca = isAncestor(node.left, n1, n2);
        let right_lca = isAncestor(node.right, n1, n2);
  
        if (left_lca!=null && right_lca!=null){
            return node.value;
        }

        return (left_lca != null) ? left_lca : right_lca;
}

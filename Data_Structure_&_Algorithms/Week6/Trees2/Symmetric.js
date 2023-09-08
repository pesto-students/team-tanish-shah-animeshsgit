class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Is tree symmetric ?

// Problem Statement:
// Check if a given tree is symmetric

// Testcase1---------------------------
console.log("TESTCASE 1")
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);

root.left.left = new Node(3);
root.left.right = new Node(4);

root.right.left = new Node(4);
root.right.right = new Node(3);

isSymmetric(root)

// Testcase2---------------------------
console.log("TESTCASE 2")
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(2);

root1.left.right = new Node(4);

root1.right.right = new Node(4);

isSymmetric(root1)
// ------------------------------------

function isSymmetric(root){
    console.log(check(root, root));
    function check(root1, root2){
        if(root1 == null & root2==null){ return true;}
        if(root1 == null || root2==null){ return false;}

        return ((root1.value == root2.value) && check(root1.left, root2.right) && check(root1.right, root2.left));
    }
}

// TC is O(n)
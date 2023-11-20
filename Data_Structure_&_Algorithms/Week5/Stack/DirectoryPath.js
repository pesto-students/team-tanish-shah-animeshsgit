class Stack {
    constructor() {
        this.item = [];
    }

    append(value) {
        this.item.push(value);
        return this.item;
        // return this.item.push(value);
    }

    rem() {
        if (this.item.length == 0) { return "underflow" }
        return this.item.pop();
    }

    isEmpty() {
        let stack = this.item;
        if (stack.length == 0) {
            return true;
        }
        else return false;
    }

    peek() {
        if (this.item.length == 0) { return "underflow" }
        return this.item[this.item.length - 1];
    }

    printStack() {
        return console.log(this.item)
    }
}

// Simplify Directory Path

// Problem Statement:
// Given an absolute path for a file or directory, simplify it. 
// The absolute path can contain multiple slashes '/', a single dot '.', 
// and a double dot '..'. The simplified path should have the following properties:

// The path starts with a single slash '/'. 
// Any two directories are separated by a single slash '/'. 
// The path does not end with a trailing slash '/'. 
// The path ".." means to move up one directory.

let str = "/home/.././user//foo/../../bar"; ///bar/
let str2 = "/a/b/c"; // /a/b/c/
simplePath(str);
simplePath(str2);

function simplePath(path) {
    let arr = path.split("/");
    let s = new Stack();

    for (let i of arr) {
        if (!s.isEmpty() && i == "..") {
            s.rem();
        }
        else if (i != "." && i != "") {
            s.append(i);
        }
    }
    let ans = ["/"];
    while (!s.isEmpty()) {
        ans.push(s.peek());
        ans.push("/");
        s.rem();
    }

    console.log(ans.reverse().toString().replaceAll(',',''));
}
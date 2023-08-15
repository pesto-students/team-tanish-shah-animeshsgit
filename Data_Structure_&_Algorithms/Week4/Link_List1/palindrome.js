class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        if (this.head == null) {
            this.head = new Node(value);
            this.size += 1;
            return;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
            this.size += 1;
        }
    }

    showAll() {
        let current = this.head;
        let ans = "";
        while (current) {
            ans += '->';
            ans += current.value;
            current = current.next;
        }
        console.log(ans);
        return ans;
    }
}


console.log(isPalindrome([1, 2, 3, 2, 5]))

function isPalindrome(arr) {
    let LL = new SinglyLL();
    arr.map((element) => {
        LL.add(element);
    });

    let left = LL.head;
    let ans = true;

    function palindromic(right) {
        if (right.next == null) {
            compare()
            return;
        }
        palindromic(right.next);
        compare()

        function compare() {
            if (left.value != right.value) { ans = false; }
            left = left.next;
        }
    }

    palindromic(LL.head);
    return ans;
}
//  TC is O(n)
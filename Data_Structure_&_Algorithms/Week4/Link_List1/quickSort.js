class LinkedList {
    //make cons. to call head by default
    //in start next is null and head = tail bcz only one node is there and size is one
    constructor(data) {
      this.head = {
        value: data,
        next: null,
      };
      this.tail = this.head;
      this.size = 1;
    }
  
    //for insert a new node
    appendNode(nodeData) {
      let newNode = {
        value: nodeData,
        next: null,
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  
    //traversing linked list
    traversing() {
      let counter = 0;
      let currentNode = this.head;
      while (counter < this.size) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
        counter++;
      }
    }
  
    //delet node
    deleteNode(index) {
      let counter = 1;
      let lead = this.head;
      if (index === 1) {
        this.head = this.head.next;
      } else {
        while (counter < index - 1) {
          lead = lead.next;
          counter++;
        }
        let nextNode = lead.next.next;
        lead.next = nextNode;
        this.size--;
        //   console.log(lead);
      }
    }
  
    //Insert Node
    insertNode(data, index) {
      let counter = 1;
      let newNode = {
        value: data,
        next: null,
      };
      let lead = this.head;
      if (index === 1) {
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
      } else if (index === this.size + 1) {
        while (counter < index - 1) {
          lead = lead.next;
          counter++;
        }
        lead.next = newNode;
        this.tail = newNode;
        //   console.log(lead);
        this.size++;
      } else {
        while (counter < index - 1) {
          lead = lead.next;
          counter++;
        }
        newNode.next = lead.next;
        lead.next = newNode;
        this.size++;
        //   console.log(lead.value);
      }
    }
  
    //print Linked list
    print() {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== this.size) {
        console.log(currentNode.value);
        counter++;
        currentNode = currentNode.next;
      }
    }
  
    value(index) {
      let counter = 1;
      let currentNode = this.head;
      while (counter !== index) {
        counter++;
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }
  
  let list = new LinkedList(3);
  list.appendNode(4);
  list.appendNode(5);
  list.appendNode(0);
  list.appendNode(1);
  list.appendNode(2);
  
  function partition(list, start, end) {
    let pivot = list.value(start);
    let pivotIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > list.value(i)) {
        pivotIndex++;
        swap(list, i, pivotIndex);
      }
    }
    swap(list, start, pivotIndex);
    return pivotIndex;
  }
  
  function swap(list, i, j) {
    let counter = 1;
    let currentNode = list.head;
    let firstNode, secondNode;
    while (counter <= list.size) {
      if (counter === i) {
        firstNode = currentNode;
      }
      if (counter === j) {
        secondNode = currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
  
    if (firstNode && secondNode) {
      // Swap the values of the two nodes
      let temp = firstNode.value;
      firstNode.value = secondNode.value;
      secondNode.value = temp;
    }
  }
  
  function quickSortLL(list, start, end) {
    if (start >= end) {
      return;
    }
  
    let pivotIndex = partition(list, start, end);
    quickSortLL(list, start, pivotIndex - 1);
    quickSortLL(list, pivotIndex + 1, end);
  }
  
  partition(list,1,list.size)
  list.print();
  console.log("---------------");
  quickSortLL(list, 1, list.size)
  list.print();
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
  getValue() {
    return this.value;
  }
  setValue(val) {
    this.value = val;
  }
}

class LinkedList{
    constructor(){
        this.head = new Node(null);
    }

    add(val)  {
        let next = this.head.next;
        let current = this.head;
        while (next != null) {
          current = next;
          next = next.next;
        }
        let node1 = new Node(val);
        current.next = node1;
      }
      print = function () {
        let next = this.head.next;
        let current = this.head;
        while (next != null) {
          current = next;
          console.log(current.value);
          next = next.next;
        }
      }

      remove = function (indx) {
        let count = 0;
        let next = this.head.next;
        let current = this.head;
        while (next != null) {
          if (count == indx) {
            current.next = next.next;
            return;
          }
          count++;
          current = next;
          next = next.next;
        }
      }
    
};


let list=new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(7);
list.add(8);
list.print();
list.remove(2);
console.log('-----------------');
list.print();


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------LinkedList constructor function----------------------------
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
function Node(val) {
    this.value= val;
    this.next= null;
  };
  //node.join = Array.prototype.join;
  let head =new Node(null);
  let add = function (val) {
    let next = head.next;
    let current = head;
    while (next != null) {
      current = next;
      next = next.next;
    }
    let node1 = new Node(val);
    current.next = node1;
  }
  
  let print = function () {
    let next = head.next;
    let current = head;
     //console.log(node.join(','));
    while (next != null) {
      current = next;
      console.log(current.value);
      next = next.next;
    }
  }
  
  let remove = function (indx) {
    let count = 0;
    let next = head.next;
    let current = head;
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
  
  add(1);
  add(2);
  add(3);
  add(7);
  add(8);
  print();
  remove(2);
   console.log('-----------------');
  print();
  
  
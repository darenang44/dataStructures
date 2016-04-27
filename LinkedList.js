var Node = require("./LinkedListNode.js");

var LinkedList = function(){
  this.head = null;
}

LinkedList.prototype.prepend = function(data){
  if(this.head === null){
    this.head = new Node(data);
  }else{
  	var newNode = new Node(data);
  	var currNode = this.head;
  	this.head = newNode;
  	newNode.next = currNode;
  }
};

LinkedList.prototype.append = function(){
  
};

LinkedList.prototype.remove = function(){
  
};

LinkedList.prototype.clear = function(){
  
};

LinkedList.prototype.isEmpty = function(){
  return this.head === null;
};

LinkedList.prototype.contains = function(){
  
};

LinkedList.prototype.print = function(){
  var str = "";
  var currNode = this.head;
  while(currNode !== null){
  	str += currNode.data + (currNode.next === null ? "" : ", ");
    currNode = currNode.next;
  }
  return str;
};

module.exports = LinkedList;
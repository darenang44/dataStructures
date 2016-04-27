var LinkedList = require("./LinkedList.js");
var assert = require("chai").assert;

var list = new LinkedList();

list.append(11);
assert.equal(list.print(), "11", "list.append should add value to list");
list.append(13);
assert.equal(list.print(), "11, 13", "list.append should add value to end of list");
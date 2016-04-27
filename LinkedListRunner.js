var LinkedList = require("./LinkedList.js");
var assert = require("chai").assert;

var list = new LinkedList();

assert.equal(list.isEmpty(), true, "list.isEmpty should return true for newly create LinkedList");
list.prepend(11);
assert.equal(list.print(), "11", "list.prepend should add value to list");
list.prepend(13);
assert.equal(list.print(), "13, 11");
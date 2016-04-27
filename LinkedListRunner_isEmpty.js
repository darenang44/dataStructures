var LinkedList = require("./LinkedList.js");
var assert = require("chai").assert;

var list = new LinkedList();

assert.equal(list.isEmpty(), true, "list.isEmpty should return true for newly create LinkedList");
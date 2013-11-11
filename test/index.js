var test = require("tape")

var nodeLove = require("../index.js")

test("nodeLove is a function", function (assert) {
    assert.equal(typeof nodeLove, "string");
    assert.equal(nodeLove, "♥");
    assert.end()
})

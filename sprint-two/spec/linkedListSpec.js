describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("head should point to node after calling addToTail once", function() {
    var node = makeNode('node')
    linkedList.addToTail('node');
    expect(node).toEqual(linkedList.head);
  });

  it("tail should point to node after calling addToTail once", function() {
    var node = makeNode('node')
    linkedList.addToTail('node');
    expect(node).toEqual(linkedList.tail);
  });
});
var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(){
};

treeMethods.contains = function(){
};

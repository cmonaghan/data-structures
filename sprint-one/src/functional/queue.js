var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var toRemove = 0; // position of the first item in the queue

  // Implement the methods below

  instance.enqueue = function(value){ 
    storage[length] = value;
    length++;
  };

  instance.dequeue = function(){
    if (length - toRemove) { // evaluates to size of queue
      var firstItem = storage[toRemove];
      toRemove++;
      return firstItem;
    }

  };

  instance.size = function(){
    return length - toRemove; // size is the difference between the last position and first position
  };

  return instance;
};
var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0;
  instance.toRemove = 0; // position of the first item in the queue

  // add queueMethods
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;

  return instance;
};

var queueMethods = {
  enqueue: function(value){ 
    this.storage[this.length] = value;
    this.length++;
  },

  dequeue: function(){
    if (this.length - this.toRemove) { // evaluates to size of queue
      var firstItem = this.storage[this.toRemove];
      this.toRemove++;
      return firstItem;
    }
  },

  size: function(){
    return this.length - this.toRemove; // size is the difference between the last position and first position
  }
};
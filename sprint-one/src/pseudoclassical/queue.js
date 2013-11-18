var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  
  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0;
  this.toRemove = 0; // position of the first item in the queue
};


Queue.prototype.enqueue = function(value){ 
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function(){
  if (this.length - this.toRemove) { // evaluates to size of queue
    var firstItem = this.storage[this.toRemove];
    this.toRemove++;
    return firstItem;
  }
};

Queue.prototype.size = function(){
  return this.length - this.toRemove; // size is the difference between the last position and first position
};
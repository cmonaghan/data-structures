var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.length = 0;
};



Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function(){
  if (this.length) this.length--;
  return this.storage[this.length];
};

Stack.prototype.size = function(){
  return this.length;
};
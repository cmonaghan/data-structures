var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = function(value){ // value must pass a string
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    if (size) size--;
    return storage[size];
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

var MinStack = function() {
  this.container = []
  this.min = Infinity;
};

MinStack.prototype.push = function(x) {
  this.container.push(x);
  if (x < this.min) this.min = x;
};

MinStack.prototype.pop = function() {
  removed = this.container.pop()
  if (this.min === removed) {
    this.min = Math.min(...this.container);
  }
};


MinStack.prototype.top = function() {
  return this.container[this.container.length-1]
};

MinStack.prototype.getMin = function() {
  return this.min
};

var obj = new MinStack()
 obj.push(-2)
 obj.push(0)
 obj.push(-3)
 console.log(obj)
 console.log(obj.getMin())
 console.log(obj.pop())
 console.log(obj)
 console.log(obj.top())
 console.log(obj.getMin())
 
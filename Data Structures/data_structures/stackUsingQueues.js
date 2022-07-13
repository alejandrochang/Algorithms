var MyStack = function () {
  return [];
};

MyStack.prototype.push = function (x) {
  return this.push(x);
};

MyStack.prototype.pop = function () {
  return this.pop();
};

MyStack.prototype.top = function () {
  console.log('this', this)
  return this;
};

MyStack.prototype.empty = function () {
  return this.length === 0;
};

var stack = new MyStack();
stack.push('test')
var param_2 = stack.pop()
var param_3 = stack.top()
// var param_4 = stack.empty()

console.log({ stack, param_2 });
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

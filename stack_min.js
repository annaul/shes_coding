class Stack {
  constructor () {
    this.stack = []
    this.min_stack = []
  }

  push(value) {
    this.stack.push(value);
    const min = this.min();
    if (min === null || value <= min)
      this.min_stack.push(value);
  }

  pop() {
    if (this.stack.length === 0)
      return null;
    const result = this.stack.pop();
    if (this.min() === result)
      this.min_stack.pop();
    return result;
  }

  min() {
    if (this.min_stack.length === 0)
      return null;
    return this.min_stack[this.min_stack.length - 1];
  }
}


var stack = new Stack();
stack.push(2);
console.log('2=', stack.min());
stack.push(3);
console.log('2=', stack.min());
stack.push(4);
console.log('2=', stack.min());
stack.push(1);
console.log('1=', stack.min());

console.log('1=', stack.pop());
console.log('2=', stack.min());
console.log('4=', stack.pop());
console.log('2=', stack.min());
console.log('3=', stack.pop());
console.log('2=', stack.min());
console.log('2=', stack.pop());
console.log('null=', stack.min());

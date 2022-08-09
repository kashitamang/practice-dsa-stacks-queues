const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...

  it("#pop should remove the last item from the list", () => {
    const stack = new Stack([1, 2, 3]);
    expect(stack.pop()).toEqual(3);
    expect(stack.list).toEqual([1, 2]);
  });
});

describe("Queue Class", () => {
  it("#enqueue should add a new item to the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.list[0]).toEqual(1);
  });
  it('#hasNext should return true if there is a next item in the list', () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.hasNext()).toEqual(true);
  });
});

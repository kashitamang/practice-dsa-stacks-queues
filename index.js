class Stack {
    #list = [];

    constructor(list){
      if (list) this.#list = list;
    }

    push(newItem){
        //add a new item
        this.#list.push(newItem);
    }

    pop(){
        //remove the last item
    }

    peek(){
        //show us the next in line 
        return this.#list[this.#list.length - 1];
    }
}

class Queue {}

module.exports = { Stack, Queue };

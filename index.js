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
        return this.#list.pop();
    }

    peek(){
        //show us the next in line 
        return this.#list[this.#list.length - 1];
    }

    get list(){
        return this.#list;
    }
}



class Queue {
    #list = [];

    constructor(list) {
        if (list) this.#list = list;
    }


    enqueue(newItem) {
        //enqueue adds to the line/list
        this.#list.push(newItem);
    }

    get count() {
        return this.#list.length;
    }

    get next() {
        return this.#list[0];
    }
}

module.exports = { Stack, Queue };

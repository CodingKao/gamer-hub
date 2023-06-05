'use strict';

class Queue {
  constructor() {
    this.data = {};
  }

  chat(key, value) {
    this.data[key] = value;
    console.log('Something was added');
    return key;
  }

  read(key) {
    return this.data[key];
  }

  remove(key) {
    let value = this.data[key];
    delete this.data[key];
    console.log('Something was removed');
    return value;
  }

}


module.exports = Queue; 

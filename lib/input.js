'use strict';

class Input {
  constructor(array) {
    this.action = array[2];
    this.payload = array[3];
    this.category = array[5];
  }

  valid() {
    if (this.action !== '-a' && this.action !== '--add' && this.action !== '-d' && this.action !== '--delete' && this.action !== '-l' && this.action !== '--list') {
      console.log('please enter a valid command');
      return false;
    } else {
      return true;
    }
  }
}


module.exports = Input;

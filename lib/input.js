'use strict';

//>o)  So this is where we settup our flags. *QUACK*
//(_>')

class Input {
  constructor(info) {

    //>o) < [0] is node *QUACK*
    //(_>')

    //>o) < [1] is <file name> *QUACK*
    //(_>')

    this.action = info[2];

    //>o) < [2] is the flag *QUACK*
    //(_>')

    this.payload = info[3];

    //>o) < [0] is node *QUACK*
    //(_>')

    this.category = info[4];
  }

  valid() {
    if (this.action === '-a' || this.action === '--add' || this.action === '-d' || this.action === '--delete' || this.action === '-l' || this.action === '--list') {
      console.log('Welcome: your command was: ' + this.action);
      console.log();
      return true;
    } else {
      console.log('please enter a valid command');
      return false;
    }
  }
}


module.exports = Input;

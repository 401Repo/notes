'use strict';

const minimist = require('minimist');

function Input(args) {

  this.action = args[2];
  this.payload = args[3];

}

Input.prototype.isValid = function() {
  if (this.action === '--add' || this.action === '-a'){
    return{
      command: this.action,
      text: this.payload,
    };

  } else

  { return new Error('Invalid input');

  }


};

module.exports = Input;


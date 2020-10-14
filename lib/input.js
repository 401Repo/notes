'use strict';

const minimist = require('minimist');

function Input(args) {

  this.action = this.isValid(args[2]);
  this.payload = args[3];

}

Input.prototype.isValid = function(arg) {
  if (arg === '--add' || arg === '-a'){
    return arg;

  } else

  { return new Error('Invalid command input');

  }


};

module.exports = Input;


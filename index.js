'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input(process.argv);

if (input.action){
  new Notes(input);
}

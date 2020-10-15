'use strict';
console.log('#-----------------------------#');
console.log('#---------- Start ------------#');
console.log('                               ');


// loading my modules
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

//loading my mongo
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect('mongodb://localhost:27017/MyDb', function (err, db) {

  if(err) throw err;

  //Write databse Insert/Update/Query code here..

});

// fist thing to do is to pass on the info of the argsv to a variable

let info = process.argv;

//take the variable and then pass it as an iput to the constructor

let workingNote = new Input(info);

if (workingNote.valid() === true) {
  let object = new Note(workingNote);
  object.execute();


  console.log('                               ');
  console.log('#---------- End --------------#');
  console.log('#-----------------------------#');
} else {
  console.log('                               ');
  console.log('#---------- End --------------#');
  console.log('#-----------------------------#');
}

// // old code

// const Input = require('./lib/input.js');
// const Notes = require('./lib/notes.js');

// const minimist = require('minimist');


// // This slices off the first two indexes and is the method for minimist
// let args = minimist(process.argv.slice(2));

// console.log(args);
// //args is an object that holds whatever command and arguments are passed in
// const input = new Input(args);

// //if input action is valid, then create new note
// //note has an id and a payload which will be added as text

// if(input.valid()) {
//   new Notes(input);
// } else {
//   throw new Error('invalid action');
// }

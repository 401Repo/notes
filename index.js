'use strict';
console.log('#-----------------------------#');
console.log('#---------- Start ------------#');
console.log('                               ');

// Get ENV info
require('dotenv').config();

// loading my modules
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

// Connect to the db
const mongoose = require('mongoose');

// connect to atlas

mongoose.connect(process.env.mongoLink, {
  useNewUrlParser: true,
  useUnifiedTopology: true }
)
  .then( () => console.log('connected to mongo'));

const { Schema } = mongoose;

// lets create a mongoose (model) scheema

const NoteSchema = new Schema({
  text:{type:String, required: true},
  added:{ type:Boolean, default:false},
  category:{type:String, required:false},
});

const NoteModel = mongoose.model('Notes', NoteSchema);

// now lets run our app

// fist thing to do is to pass on the info of the argsv to a variable

let info = process.argv;

//take the variable and then pass it as an iput to the constructor

let workingNote = new Input(info);

if (workingNote.valid() === true) {
  let object = new Note(workingNote);
  object.execute();


  // what rudimentary info do i need to persist an objec?
  // console.log(` this is the object: ${object}`);
  // console.log(` this is the object text: ${object.payload}`);
  // console.log(` this is the object category: ${object.action}`);

  const newNote = new NoteModel({
    text: object.payload,
    category: 'default',
    added: true,
  });

  // send it over to the db
  newNote.save();

  console.log('                               ');
  console.log('#---------- End --------------#');
  console.log('#-----------------------------#');
} else {
  console.log('                               ');
  console.log('#---------- End --------------#');
  console.log('#-----------------------------#');
}



// Search our notes BUT delay so it populate to mongo

setTimeout(function(){
  console.log('#-----------------------------#');
  console.log('#-----------------------------#');
  console.log();
  console.log('These are our saved notes:');
  console.log('#-----------------------------#');
  console.log('#-----------------------------#');
  NoteModel.find({})
    .then(notes => console.log(notes));
}, 5000);








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

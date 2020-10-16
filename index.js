'use strict';

console.log('                               ');

// lets make instructions:

console.log('oooo   oooo  ooooooo   ooooooooooo ooooooooooo  oooooooo8 ooooo  oooo ');
console.log(' 8888o  88 o888   888o 88  888  88  888    88  888          888  88   ');
console.log(' 88 888o88 888     888     888      888ooo8     888oooooo     888     ');
console.log(' 88   8888 888o   o888     888      888    oo          888    888     ');
console.log('o88o    88   88ooo88      o888o    o888ooo8888 o88oooo888    o888o    ');
console.log('');
console.log('');


// Get ENV info
require('dotenv').config();

// loading my modules
const HTTP = require('./lib/http.js');
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const NoteModel = require('./lib/models / requests/noteModel');

const mongoose = require('mongoose');
const noteModel = require('./lib/models / requests/noteModel');

// fist thing to do is to pass on the info of the argsv to a variable

let info = process.argv;

//take the variable and then pass it as an iput to the constructor

let workingNote = new Input(info);

if (workingNote.valid() === true) {
  let object = new Note(workingNote);
  object.execute();


  // send to mongoose if action is add

  if(object.action === '--add' || object.action === '-a'){

    mongoose.connect(process.env.mongoLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true }
    ).then(()=> {

      const newNote = new NoteModel({
        text: object.payload,
        category: 'default',
        added: true,
      });
      newNote.save();

    });

    console.log('                               ');
    console.log('#---------- End --------------#');
    console.log('#-----------------------------#');
  } else if(object.action === '--list' || object.action === '-l'){


    console.log('-------Your Notes Bellow-------');
    console.log('#-----------------------------#');


    mongoose.connect(process.env.mongoLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true }
    )
    noteModel.find({})
      .then(notes => console.log(notes))
      .then( () => console.log('#-----------------------------#'))
      .then( () => console.log('#------------End--------------#'));

  }
  else if(object.action === '--delete' || object.action === '-d'){


    console.log('-------   Deleting...  -------');
    console.log('#-----------------------------#');


    mongoose.connect(process.env.mongoLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true }
    )

    noteModel.deleteOne({ text: `${object.payload}`}, function (err) {
      if(err) console.log('Sorry, not found.');
      console.log('Gone!');
    });


  }
  else {
    console.log('                               ');
    console.log('#---------- End --------------#');
    console.log('#-----------------------------#');
  }

}



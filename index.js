'use strict';

//>o) < Banner *QUACK*
//(_>')
console.log();
console.log('oooo   oooo  ooooooo   ooooooooooo ooooooooooo  oooooooo8 ooooo  oooo ');
console.log(' 8888o  88 o888   888o 88  888  88  888    88  888          888  88   ');
console.log(' 88 888o88 888     888     888      888ooo8     888oooooo     888     ');
console.log(' 88   8888 888o   o888     888      888    oo          888    888     ');
console.log('o88o    88   88ooo88      o888o    o888ooo8888 o88oooo888    o888o    ');
console.log('');
console.log('');


//>o) < secret env info *QUACK*
//(_>')
require('dotenv').config();

//>o) < load modules *QUACK*
//(_>')

// const HTTP = require('./lib/http.js');
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
const NoteModel = require('./lib/models / requests/noteModel');
const mongoose = require('mongoose');
const noteModel = require('./lib/models / requests/noteModel');

//>o) < read command line *QUACK*
//(_>')

let info = process.argv;

//>o) < validate info *QUACK*
//(_>')

let noteinfo = new Input(info);

//>o) < If valid lets start my if statements *QUACK*
//(_>')

if (noteinfo.valid() === true) {
  let data = new Note(noteinfo);
  data.execute();

  // send to mongoose if action is add

  if(data.action === '--add' || data.action === '-a'){

    mongoose.connect(process.env.mongoLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true }
    ).then(()=> {

      const newNote = new NoteModel({
        text: data.payload,
        category: data.category || 'Default',
        added: true,
      });
      newNote.save().then(()=> {
        process.exit(1);
        //>o) < program will exit after promise saves to mongodb *QUACK*
        //(_>')
      });
      //
      //TODO: USE COLLECTIONS
      //
      //HTTP.fetch(newNote);
      // }).then( () => {

    //   console.log('Trying to land here... saving my notes again using collections method');
    //   const request = new HTTP({text:data.text, category:data.category, added:true});
    //   return request.fetch()
    });

    console.log('                               ');
    console.log('#---------- End --------------#');
    console.log('#-----------------------------#');
    console.log();
    //>o) < will print before saving to mongo but not before its saved *QUACK*
    //(_>')

  } else if(data.action === '--list' || data.action === '-l'){


    //>o) < List either a catgory, all, or say none found *QUACK*
    //(_>')

    console.log();
    console.log('-----Listing Notes Bellow------');
    console.log('#-----------------------------#');


    mongoose.connect(process.env.mongoLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true }
    )
    //>o) < say command is: node index.js -l 'Birds' = Birds is the category searched
    //(_>')

    if(data.payload !== undefined){
      console.log(`Notes under ${data.payload}: `);
      console.log();
      noteModel.find({category:data.payload}, function(err, results){
        if(err){console.log('Error')}

        //>o) < if thre is an input but none found then throw error message and exit
        //(_>')

        if(!results.length) {
          console.log('No notes under that category found');
          process.exit(1);
        }
      })
        .then(notes => console.log(notes))
        .then( () => console.log('#-----------------------------#'))
        .then( () => console.log('#------------End--------------#'))
        .then(() => {console.log();
          process.exit(1)})

    } else {
      console.log('Notes under every category: ');
      console.log();
      noteModel.find({})
        .then(notes => console.log(notes))
        .then( () => console.log('#-----------------------------#'))
        .then( () => console.log('#------------End--------------#'))
        .then(() => {console.log();
          process.exit(1)})
    }

    //TODO USE COLLECTIONS
    // .then( () => {

    //   console.log('Trying to land here... List my notes again using collections method');
    //   const request = new HTTP();
    //   return request.list().then(
    //     requests => console.log(requests))
    // });
  }
  else if(data.action === '--delete' || data.action === '-d'){

    //>o) < Instead of an ID we can delete by body of a note:
    //(_>') Say you got category 'Animals' and want to delete
    //      'Monkey' you can -l animals and then see 'Monkey'
    //      And delte the animal. deleting non-existing entry
    //      Throws an error.

    console.log('-------   Deleting...  -------');
    console.log('#-----------------------------#');


    mongoose.connect(process.env.mongoLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true }
    )

    noteModel.deleteOne({ _id: `${data.payload}`}, function (err) {
      if(err) console.log('Sorry, not found.');
      console.log('Gone!');
      process.exit(1);
    });


  }
  else {
    console.log('                               ');
    console.log('#---------- End --------------#');
    console.log('#-----------------------------#');
  }

}

// close program:

'use strict';

// const noteModel = require('./models / requests/noteModel.js');
const NoteModel = require('./models / requests/request.js');
const NoteCollection = require('./models / requests/note-collection.js');

class HTTP{
  constructor(options = {}) {
    this.text = options.text;
    this.category = options.category;
    this.added = options.added;
    // this.text = options.text;
    // this.added = options.added;
    // this.category = options.category;
  }

  fetch(){
    const newRequest = new NoteCollection(NoteModel);
    newRequest.add(this);
  }

  list() {
    return NoteCollection.find({});
  }
}

module.exports = HTTP;

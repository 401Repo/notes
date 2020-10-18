'use strict';

const NoteModel = require('/lib/models / requests/note-collection.js');

class NotesCollection{

  constructor() {
    this.model = NoteModel;
  }

  add(args){

    const newModel = new this.model(args);
    return newModel.save();

  }

  list(args){

    const newModel = new this.model(args);
    return newModel.save();

  }

  update(){



  }

  delete(){



  }


}

module.exports = NotesCollection;

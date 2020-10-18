'use strict';

const RequestModel = require('./request.js');

class RequestCollection{

  constructor() {
    this.model = RequestModel;
  }

  add(args){

    const newModel = new this.model(args);
    return newModel.save();

  }

  list(){

    const newModel = new this.model(args);
    return newModel.save();

  }

  update(){



  }

  delete(){



  }


}

module.exports = RequestCollection;

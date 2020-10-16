'use strict';

class Notes{

  constructor(object){
    this.action = object.action;
    this.payload = object.payload;

  }

  execute(){
    if(this.action === '--add' || this.action === '-a'){
      this.add();
    }
    else if(this.action === '--list' || this.action === '-l'){
      this.list();
    }
    else {
      this.delete();
    }


  }

  add(){
    console.log('This is your note: ' + this.payload);
  }

  list(){
    console.log('Your notes: ');
  }

  delete(){
    console.log('Deleting: ' + this.payload);
  }

}

module.exports = Notes;

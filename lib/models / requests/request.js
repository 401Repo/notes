'use strict';

const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const RequestSchema = new Schema({
//   url: { type:String, required:true },
//   method: { type:String, required:true, enum: ['GET' || 'POST']},
//   body: { type: String, required:false },
// });

// module.exports = mongoose.model('Request', RequestSchema);

const { Schema } = mongoose;

const NoteSchema = new Schema({
  text:{type:String, required: true},
  added:{ type:Boolean, default:false},
  category:{type:String, required:false},
});

module.exports = mongoose.model('Note', NoteSchema);

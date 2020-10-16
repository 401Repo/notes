'use strict';

const mongoose = require('mongoose');

const NoteSchema = require('./noteSchema.js');

module.exports = mongoose.model('Notes', NoteSchema);

'use strict';

const mongoose = require('mongoose');

const RequestSchema = require('./schema.js');

module.exports = mongoose.model('Requests', RequestSchema);

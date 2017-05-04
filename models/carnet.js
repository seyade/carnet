'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CarnetBookmarkSchema;

CarnetBookmarkSchema = new Schema({
  bookmarkTitle: {
    type: String,
    required: 'Please type the bookmark name or reference.'
  },
  url: {
    type: String,
    required: 'Please type the url relating to the bookmark name or reference.'
  },
  info: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('carnet', CarnetBookmarkSchema);

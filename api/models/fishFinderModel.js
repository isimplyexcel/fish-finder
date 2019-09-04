'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FishingSpot = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the fishing spot'
  },
  imageURL: {
    type: String,
    required: 'Please enter the image URL for this fishing spot'
  },
  body: {
    type: String,
    required: 'Please enter a description for this fishing spot'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FishingSpots', FishingSpot);

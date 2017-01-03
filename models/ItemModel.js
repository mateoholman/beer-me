const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  abv: {
    type: String,
    required: true,
  },

  ibu: {
    type: String,
    required: true,
  },

  brewedBy: {
    type: String,
    required: true,
  },

  style: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    default: "Ain't no label here Bubba.",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'List',
    required: true,
  },
});

module.exports = mongoose.model('Item', itemSchema);

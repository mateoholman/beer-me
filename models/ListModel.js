const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    default: 'https://s7d9.scene7.com/is/image/BedBathandBeyond/51320043137367p?$478$',
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  items: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Item',
  }]
});

module.exports = mongoose.model('List', listSchema);

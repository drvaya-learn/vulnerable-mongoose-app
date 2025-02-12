const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    age: {
      type: Number,
    },
    bio: {
      type: String,
      trim: true
    }
  },
  {
    collection: 'authors'
  }
);

module.exports = mongoose.model('Author', authorSchema);

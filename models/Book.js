const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    price: {
      type: Number,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: true
    },
    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    }
  },
  {
    collection: 'books',
  }
);

module.exports = mongoose.model('Book', bookSchema);
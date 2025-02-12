const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    reviewer: {
      type: String,
      trim: true,
      required: true
    },
    rating: {
      type: Number,
    },
    comment: {
      type: String,
      trim: true
    }
  },
  {
    collection: 'reviews'
  }
);

module.exports = mongoose.model('Review', reviewSchema);

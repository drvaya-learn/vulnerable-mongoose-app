const express = require('express');
const router = express.Router();
const Author = require('../models/Author');
const Review = require('../models/Review');
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  try {
    const books = await Book.find({}).populate("author", "name").exec();
    return res.render('index', { books });
  } catch (err) {
    console.log(err)
    return res.sendStatus(500);
  }
});

router.get('/:id/detail', async (req, res) => {
  try {
    const id = req.params.id;
    const view = req.query.view || 'author';
    const book = await Book.findById(id).populate(view);
    return res.render('book', { book });
  } catch (err) {
    console.log(err)
    return res.sendStatus(500);
  }
});


module.exports = router;

require('dotenv').config();
const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const defaultRouter = require('./routes/index');

connectDB();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', defaultRouter);

mongoose.connection.once('open', async () => {
  console.log('Connected to DB');
  app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
    console.log('Listening on port', process.env.PORT || 5000);
  });
});

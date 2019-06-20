//Modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


//db connection
mongoose.connect(process.env.DB_CON)
  .then(() => console.log('Connection to CosmosDB successful'))
  .catch((err) => console.error(err));

//Routes
const postsRouter = require('./posts');
const resultsRouter = require('./result')

//Express Server
const app = express();

app.use(express.json())

app.use(express.static('./build/'))

//Catch routes
app.use('/api', postsRouter);
app.use('/api', resultsRouter)


app.listen(3001, () => console.log('ThreePointSix API listening on port 3001'))
module.exports = app;

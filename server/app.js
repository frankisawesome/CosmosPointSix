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


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`ThreePointSix API listening on port ${port}`))
module.exports = app;

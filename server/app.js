//Modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//db connection
mongoose.connect('mongodb://threepointsix:6WDIqlmiGdnM8T8ttvuia1BpTRkDP6Ng9afLzI4x9IIbWFLho6vVd4Ng3Csz7cXCTpF9LE9roV9PnH4ul6bVYw%3D%3D@threepointsix.documents.azure.com:10255/?ssl=true')
  .then(() => console.log('Connection to CosmosDB successful'))
  .catch((err) => console.error(err));

//Routes
const postsRouter = require('./posts');
const resultsRouter = require('./result')

//Express Server
const app = express();

app.use(express.json())

//Catch routes
app.use('/api', postsRouter);
app.use('/api', resultsRouter)


app.listen(3001, () => console.log('ThreePointSix API listening on port 3001'))
module.exports = app;

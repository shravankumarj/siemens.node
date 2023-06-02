const images=require('./getImageslist.js')
const express = require('express');
const cors = require('cors');


const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");

    next();
    
  });

app.use('/images', images)

const PORT = process.env.PORT ||4200;

app.listen(PORT,console.log(
    `Server started on port ${PORT}`));
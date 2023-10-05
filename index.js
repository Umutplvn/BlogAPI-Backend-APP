"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
//? $ npm init -y
//? $ npm i express dotenv express-async-errors
//? $ npm i mongoose 

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------*/
//* Accept json data:
app.use(express.json())

/* ------------------------------------------------------*/
app.all('/', (req, res)=>{
    res.send(
        "Welcome to Blog App"
    )
})

/* ------------------------------------------------------*/
//* Error Handler
app.use(require('./src/errorHandler'))

/* ------------------------------------------------------*/
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
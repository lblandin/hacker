// ENV
require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./request');
const app = express();
const port = 3000;
dotenv.config();


// EXPRESS 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('vue'));

app.listen(port, () => console.log(`App listening on port ${port}`));
const express = require('express');

const Router = express.Router();

Router.get('/', (req,res) => {
    res.send("Here you can get the seller details");
});

module.exports = Router;
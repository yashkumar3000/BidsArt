const express = require('express');

const Router = express.Router();

Router.get('/', (req,res) => {
    res.send("This is the Customer route");
});

module.exports = Router;
const express = require('express');
const con = require('../database/db');

const Router = express.Router();

Router.get('/', (req,res) => {
    con.query("SELECT * from Sailors", (err,rows) => {
        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }
    });
});

module.exports = Router;
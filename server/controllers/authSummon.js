const mysql2 = require('mysql2'); // get the client
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')

// setup hidden config for database
dotenv.config({path:'./.env'})

// create the connection to database
const db = mysql2.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
  });


  exports.register = ((req,res)=>{
    res.json({"user":["fuck","Yeszer"]})
    
    })
const express = require('express'); // Import express framework
const app = express(); // Instantiate Express JS to a variable
const port = 5000 // Port for the server
var cors = require('cors')

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());// Prerequisite for express JS

app.use('/auth',require('./routes/Auth'));
app.use('/client',require('./routes/Client'));
app.use('/driver',require('./routes/Driver'));

// setting up the server
app.listen(port,()=>{
    console.log("Server Started http://localhost:"+port)
})
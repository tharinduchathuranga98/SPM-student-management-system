const express = require('express');
const mongoose = require('mongoose');
const APP = express();

//middleware
APP.use(express.json());

// Require the routers
const router = require("./routes/studentGrpsRoute");



//Use routes
APP.use("/studentGrps", router);



const PORT = 8000;

const DB_URL = 'mongodb+srv://project01:project01@afproject.n2ih4.mongodb.net/AF_Project?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected'); 
})
.catch((err)=>console.log('DB connection error',err));

APP.listen(PORT,()=>{
    console.log(`App is running ${PORT}`);
});


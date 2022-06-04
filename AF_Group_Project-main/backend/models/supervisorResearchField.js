const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    supName:{
        type:String,
        required:true
    },       
    researchFieldT:{
        type:String,
        required:true
    },
    supervisorEmail:{
        type:String,
        required:true
    } 
});

module.exports = mongoose.model('SupervisorResearchField', postSchema)
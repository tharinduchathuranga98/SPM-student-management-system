const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    coSupervisorName:{
        type:String,
        required:true
    },     
    coResearchField:{
        type:String,
        required:true
    },
    coSupervisorEmail:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('CoSupervisorResearchField', postSchema)
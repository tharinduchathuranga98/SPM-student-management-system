const mongoose = require('mongoose');


const templateSchema = new mongoose.Schema({


    file: { type: String, required: true },
});


module.exports = mongoose.model('templates', templateSchema)
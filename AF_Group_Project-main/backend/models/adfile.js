const mongoose = require("mongoose");

const afilescheema = new mongoose.Schema({
  groupId: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Adminfile", afilescheema);

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  studentsGrpId: {
    type: String,
    required: true,
  },
  researchField: {
    type: String,
    required: true,
  },
  supervisorName: {
    type: String,
    required: true,
  },
  selectedTopic: {
    type: String,
    required: true,
  },
  grpLeaderName: {
    type: String,
    required: true,
  },
  grpLeaderEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ResearchTopicsReg", postSchema);

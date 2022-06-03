const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentGrpSchema = new Schema({
    leaderName: {
        type: String,
        required: true,
      },
      leaderID: {
        type: String,
        required: true,
      },
      leaderEmail: {
        type: String,
        required: true,
      },

      member1Name: {
        type: String,
        required: true,
      },
      member1ID: {
        type: String,
        required: true,
      },
      member1Email: {
        type: String,
        required: true,
      },

      member2Name: {
        type: String,
        required: true,
      },
      member2ID: {
        type: String,
        required: true,
      },
      member2Email: {
        type: String,
        required: true,
      },

      member3Name: {
        type: String,
        required: true,
      },
      member3ID: {
        type: String,
        required: true,
      },
      member3Email: {
        type: String,
        required: true,
      },
    });

    module.exports = mongoose.model("studentGrp", studentGrpSchema);
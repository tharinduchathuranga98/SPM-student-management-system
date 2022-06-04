const express = require("express");
const ViewFile = require("../models/adfile");

const path = require("path");

const router = express.Router();

//insert File  in data base
router.post("/adfile/save", (req, res) => {
  let newViewFile = new ViewFile(req.body);

  newViewFile.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "Document saved successfully",
    });
  });
});
//retrive file Submission
router.get("/file", (req, res) => {
  ViewFile.find().exec((err, viewfile) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      existingPosts: viewfile,
    });
  });
});

//get a specific unic submission link
router.get("/file/:id", (req, res) => {
  let groupurl = req.params.id;
  ViewFile.findById(groupurl, (err, viewfile) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      viewfile,
    });
  });
});

module.exports = router;

const Files = require("../models/file");
const express = require("express");
const router = express.Router();

//submit files
router.post("/addFile", async (req, res) => {
  try {
    const file = await Files(req.body).save();
    res.status(201).send({ data: file, message: "File submit successfully" })
  } catch (error) {
    res.status(500).send({ message: "Internal server error" })
  }
})

//retrive all files
router.get("/getfile", async (req, res) => {

  const doc = await Files.find();
  res.json(doc)
});



//delete file
router.delete("/subfile/:id", async (req, res) => {
  try {
    const deleteFile = await Files.findByIdAndRemove(req.params.id);
    res.json(deleteFile);
  } catch (err) {
    console.log("error in deleting", err);
    res.status(204).send({ message: "failed", data: err });
  }
});

module.exports = router;
const Evaluation = require("../models/evalumodel");
const express = require("express");
const router = express.Router();

//submit files
router.post("/addevalu", async (req, res) => {
    try {
        const evaluation = await Evaluation(req.body).save();
        res.status(201).send({ data: evaluation, message: "Evaluation submit successfully" })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})

//retrive all files
router.get("/getevalu", async (req, res) => {

    const doc = await Evaluation.find();
    res.json(doc)
});



//delete file
router.delete("/evalu/:id", async (req, res) => {
    try {
        const deleteEvalu = await Files.findByIdAndRemove(req.params.id);
        res.json(deleteEvalu);
    } catch (err) {
        console.log("error in deleting", err);
        res.status(204).send({ message: "failed", data: err });
    }
});

module.exports = router;
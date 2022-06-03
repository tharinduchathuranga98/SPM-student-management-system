const Templates = require("../models/template");
const express = require("express");
const router = express.Router();

//submit files
router.post("/addTemplate", async (req, res) => {
    try {
        const template = await Templates(req.body).save();
        res.status(201).send({ data: template, message: "Template submit successfully" })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})

//retrive all files
router.get("/gettemplate", async (req, res) => {

    const doc = await Templates.find();
    res.json(doc)
});





module.exports = router;
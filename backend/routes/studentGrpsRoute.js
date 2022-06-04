const express = require("express");
const router = express.Router();
const studentGrp = require("../models/studentGrp");

//http://localhost:5000/studentGrps
router.get ("/", async (req, res, next) => {
    let studentGrps;
    try {
      studentGrps = await studentGrp.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!studentGrps) {
      return res.status(404).json({ message: "No student groups found" });
    }
    return res.status(200).json({ 
      success: true,
      existingstudentGrps: studentGrps 
    });
  });

  //http://localhost:5000/studentGrps/add
  router.post ("/add", async (req, res, next) => {
    const { 
        leaderName,
        leaderID,
        leaderEmail,
        member1Name,
        member1ID,
        member1Email,
        member2Name,
        member2ID,
        member2Email,
        member3Name,
        member3ID,
        member3Email 
    } = req.body;
    let stGrp;
    try {
      stGrp = new studentGrp({
        leaderName,
        leaderID,
        leaderEmail,
        member1Name,
        member1ID,
        member1Email,
        member2Name,
        member2ID,
        member2Email,
        member3Name,
        member3ID,
        member3Email,
      });
      await stGrp.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!stGrp) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ 
      success:"Student group added successfully",
      studentGrp: stGrp 
    });
  });


router.get("/:id",async(req,res,next) => {
    const id = req.params.id;
    let stdGrp;
    try {
        stdGrp = await studentGrp.findById(id)
    } catch (err) {
      console.log(err);
    }
    if (!stdGrp) {
      return res.status(404).json({ message: "No student group found" });
    }
    return res.status(200).json({ 
      success:true,
      studentGrp: stdGrp 
    });
  });


  router.put('/update/:id', async(req,res) => {
    const id = req.params.id;
    const { 
        leaderName,
        leaderID,
        leaderEmail,
        member1Name,
        member1ID,
        member1Email,
        member2Name,
        member2ID,
        member2Email,
        member3Name,
        member3ID,
        member3Email,
    } = req.body;
    let stdGrp;
    try {
        stdGrp = await studentGrp.findByIdAndUpdate(id, {
            leaderName,
            leaderID,
            leaderEmail,
            member1Name,
            member1ID,
            member1Email,
            member2Name,
            member2ID,
            member2Email,
            member3Name,
            member3ID,
            member3Email,
      });
      stdGrp = await stdGrp.save();
    } catch (err) {
      console.log(err);
    }
    if (!stdGrp) {
      return res.status(404).json({ message: "Unable To update by this ID" });
    }
    return res.status(200).json({ 
      success: "Update Succesfully",
      studentGrp:stdGrp 
    });
  });


router.delete('/delete/:id' ,async(req,res) =>{
    const id = req.params.id;
    let stdGrp;
    try {
        stdGrp = await studentGrp.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!stdGrp) {
      return res.status(404).json({ message: "Unable to delete by this ID" });
    }
    return res.status(200).json({ message: "Student group successfully deleted" });
  });



  module.exports = router;
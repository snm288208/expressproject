const express = require('express');
const router = express.Router();
const Ar = require('../model/ar');
const mongoose = require('mongoose');


router.get('/:id',(req,res,next)=>{
    Ar.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            ar:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            msg:err
        })
    })
})

router.post('/getar',(req,res,next) => { 
      Ar.find()
      .then(result=>{
        res.status(200).json({
            students:result
        })
      })
      .catch(err=>
        res.status(200).json({
            msg:err
        }))
})
router.post('/about',(req,res,next) => {
    const ar = new Ar({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        gender:req.body.gender
    })
    ar.save()
    .then(result=>{
        res.status(200).json({
            newstudent:result
    })
    })
    .catch(err =>{
        res.status(500).json({
            msg:err
        })
    })
})

router.post('/search',(req,res,next)=>{
    Ar.find({
        $or:[
            {name:{ $regex: req.body.name, $options: 'i' },
            email:{ $regex:req.body.email, $options: 'i'}}
        ],
        gender:{$regex: req.body.gender, $options:'i'},
        phone:{$gte: req.body.phone},
        name:{$exists:true}
       
    })
    .then(result=>{
        res.status(200).json({
            aritem:result
        })
    })
})

module.exports = router
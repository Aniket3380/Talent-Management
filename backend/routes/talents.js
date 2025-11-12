const express=require("express")
const router=express.Router()
const Talent = require("../models/Talent");



router.post('/',async(req,res)=>{
    try{
        const{name,email,skills,experience}=req.body
        if(!name || !email)
        {
            return res.status(400).json({messege:"name and email are required"})
        }
        
        
        const talent=new Talent({
            name,
            email,
            skills:Array.isArray(skills)?skills:String(skills || "").split(",").map(s=>s.trim()).filter(Boolean),
            experience:Number(experience) || 0
        })
        await talent.save()
        res.status(201).json(talent)
    }
    catch(err)
    {
        if(err.code===11000)
        {
            return  res.status(409).json({messege:"email alredy exists"})
        }
         res.status(500).json({messege:"server Error"})
    }
   
})

router.get("/",async(req,res)=>{

   try{
    const {skill}=req.query;
    let filter={}
    if(skill)
    {
        filter.skills={$regex:new RegExp(skill,"i")}
    
    }
    const talents=await Talent.find(filter).sort({createdAt:-1})
    res.json(talents)
   }
   catch
   {
    res.status(500).json({messege:"server error"})

   }
})

module.exports=router;

const r=require("express").Router();
const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

r.post("/register", async(req,res)=>{
  const {name,email,password}=req.body;
  const exists=await User.findOne({email});
  if(exists) return res.json({msg:"User exists"});
  const hashed=await bcrypt.hash(password,10);
  const u=await User.create({name,email,password:hashed});
  const token=jwt.sign({id:u._id},process.env.JWT_SECRET);
  res.json({token,user:u});
});

r.post("/login", async(req,res)=>{
  const {email,password}=req.body;
  const u=await User.findOne({email});
  if(!u) return res.json({msg:"Invalid"});
  if(!(await bcrypt.compare(password,u.password))) return res.json({msg:"Invalid"});
  const token=jwt.sign({id:u._id},process.env.JWT_SECRET);
  res.json({token,user:u});
});

module.exports=r;

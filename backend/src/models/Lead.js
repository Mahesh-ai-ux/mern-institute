
const m=require("mongoose");
module.exports=m.model("Lead", new m.Schema({
  name:String,
  status:{type:String,default:"new"},
  assignedTo:{type:m.Schema.Types.ObjectId,ref:"User"}
},{timestamps:true}));

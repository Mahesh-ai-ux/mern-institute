
const mongoose=require("mongoose");
module.exports=async(uri)=>{
  try{
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  }catch(e){
    console.error("Mongo error:",e);
    process.exit(1);
  }
}

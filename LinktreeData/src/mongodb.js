const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LinktreeData")
.then(()=>{
  console.log("MongoDB Connected")
})
.catch(()=>{
  console.log("Failed connection")
})

const LogInShema=new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  }
})

const collection=new mongoose.model("orders",LogInShema)

module.exports=collection
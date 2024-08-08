const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const templetPath=path.join(__dirname,'../templetes')

app.use(express.json())
app.use(express.static("public"))
app.set("view engine","hbs")
app.set("views",templetPath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
  res.render("login")
})
app.get("/singup",(req,res)=>{
  res.render("singup")
})

app.post("/singup",async (req,res)=>{
  const data={
    name:req.body.name,
    password:req.body.password
  }
  await collection.insertMany([data])

  res.render("home")
})

app.post("/login",async (req,res)=>{

  try{
    const check=await collection.findOne({name:req.body.name})

    if(check.password===req.body.password){
      res.render("home")
    }else{
      res.send("wrong password")
    }

  }
  catch{

    res.send("home")


  }
})


app.listen(3001,()=>{
  console.log("Port Connected")
})

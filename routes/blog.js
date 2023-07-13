const express =require("express")
const route=express.Router()


route.get("/",(req,res)=>{
  res.send("now page serve form blog.js")
})


module.exports=route

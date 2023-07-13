// chap 2

// const express =require("express")
// const route=express.Router()


// route.get("/",(req,res)=>{
//   res.send("now page serve form blog.js")
// })



// module.exports=route


// chap 3

const express =require("express")
const route=express.Router()
const path=require("path")


route.get("/",(req,res)=>{
  // res.send("now page serve form blog.js")
  res.sendFile(path.join(__dirname,"../templates/index.html"))
})
route.get("/blog",(req,res)=>{
  // res.send("now page serve form blog.js")
  res.sendFile(path.join(__dirname,"../templates/blog.html"))
})

route.get("/blog/:slug",(req,res)=>{
  // res.send("now page serve form blog.js")

  // url k params ko get krne k liye use this: 
  console.log(req.params.slug)
  res.sendFile(path.join(__dirname,"../templates/blogpost.html"))
})

module.exports=route

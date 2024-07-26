const express = require("express")
const app = express()

app.get("/",(req,res)=>{
res.send("<h1>homepage</h1>")
})

app.get("/dogs",(req,res)=>{
  res.send("<h1>dogs</h1>")
})

app.listen(3001,()=>{
  console.log("localhost:3001で起動中")
})
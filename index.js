const express = require("express")
const app = express()
const morgan = require("morgan")


app.use(morgan("tiny"))//* すべてのリクエストでapp.use内のコールバック関数は実行される
//* GET /dogs 304 - - 2.507 ms
//* GET /w2d2cf3vg 404 148 - 2.180 ms

app.get("/",(req,res)=>{
res.send("<h1>homepage</h1>")
})

app.get("/dogs",(req,res)=>{
  res.send("<h1>dogs</h1>")
})

app.listen(3001,()=>{
  console.log("localhost:3001で起動中")
})
const express = require("express")
const app = express()


app.use("/secrets",(req,res,next)=>{ //* secretだけ
  console.log(req.query)
  const {password} = req.query
  if(password === "supersecret") {
   return  next() //* returnいる
  }
  res.status(404).send("error")
})


app.get("/", (req, res) => {
  console.log(req.requestTime)
  res.send(`<h1>リクエスト時刻: ${req.requestTime}</h1>`)
})

app.get("/secrets",(req,res)=>{
  res.send("<h1>this is a secret page!</h1>")
})

app.use((req,res)=>{
  res.status(404).send("<h1>not found</h1>")
})


app.listen(3001, () => {
  console.log("localhost:3001で起動中")
})

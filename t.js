const express = require("express")
const app = express()
const morgan = require("morgan")

app.use((req, res, next) => {
  console.log(req.method, req.path) //* GET /
  next()
})

app.get("/", (req, res) => {
  res.send(`<h1>hello</h1>`)
})

app.listen(3001, () => {
  console.log("localhost:3001で起動中")
})

const express = require("express")
const app = express()
const morgan = require("morgan")

// app.use(morgan("tiny"))
// app.use(morgan("dev"))
// app.use(morgan("common")) //* 色が出る

//* すべてのリクエストでapp.use内のコールバック関数は実行される 間に入れた(reqとresの)
//* GET /dogs 304 - - 2.507 ms
//* GET /w2d2cf3vg 404 148 - 2.180 ms

app.use((req, res, next) => {
  //* すべてで実行　この処理の後にnext()を実行 (次の関数を実行)
  console.log("初めてのミドルウェア")
  next() //* 呼ばなかったらずっとぐるぐる
  console.log("nextを読んだ後") //* next()が終わった後にここも実行されちゃう
})

app.use((req, res, next) => {
  //* すべてで実行　この処理の後にnext()を実行 (次の関数を実行)
  console.log("2番目のミドルウェア")
  next() //* pathをふまえてルーティングする
})

app.get("/", (req, res) => {
  res.send("<h1>homepage</h1>")
})

app.get("/dogs", (req, res) => {
  res.send("<h1>dogs</h1>")
})

app.listen(3001, () => {
  console.log("localhost:3001で起動中")
})

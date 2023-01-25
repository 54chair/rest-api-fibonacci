const express = require('express')
const app = express()
const JSONbig = require('json-bigint');
const { check, validationResult } = require('express-validator');
const fib = require("./fibonacci");

app.get('/fib', [
  check('n').isInt({min: 1})
  ], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    var result = JSON.stringify({"status": 400, "message": "Bad request."}, null, 2);
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.status(400).send(result);
  } else {
    var n = req.query.n;
    const fibonacci = fib(n);
    var result = JSONbig.stringify({"result": fibonacci}, null, 2);
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.status(200).send(result);
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("listening server")
})
const express = require('express')
const app = express()
const JSONbig = require('json-bigint');
const { check, validationResult } = require('express-validator');

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
    var fibobacci = fib(n);
    var result = JSONbig.stringify({"result": fibobacci}, null, 2);
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.status(200).send(result);
  }
})

function fib(n) {
  const result = [0, 1];

  for (i = 2; i <= n; i++) {
    const a = BigInt(result[i - 1]);
    const b = BigInt(result[i - 2]);

    result.push(a + b);
  }
  return result[n];
}

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("listening server")
})
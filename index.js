const express = require('express')
const app = express()
const JSONbig = require('json-bigint');

app.get('/fib', function (req, res) {
  var n = req.query.n;
  var fibobacci = fib(n);
  var result = JSONbig.stringify({"result": fibobacci}, null, 2);
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.status(200).send(result);
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
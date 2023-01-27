## フィボナッチAPI

### 1. 概要

```
指定したn番目のフィボナッチ数を返すAPI
```

### 2.仕様

#### URI
```
https://rest-api-fibonacci.herokuapp.com/fib
```

#### リクエストパラメーター
```
n 数値 フィボナッチ数列の順番を指定する値。1で先頭のフィボナッチ数を指定する。
```

### 3. リクエストの成功例

#### nが自然数のとき(n=99)
https://rest-api-fibonacci.herokuapp.com/fib?n=99


#### レスポンス
```
{
    "result": 218922995834555169026
}
```

### 4. リクエストのエラー例

#### nがマイナスの時(n=-1)
https://rest-api-fibonacci.herokuapp.com/fib?n=-1

#### nが文字列の時(n=String)
https://rest-api-fibonacci.herokuapp.com/fib?n=String

#### レスポンス
```
{
    "status": 400,
    "message": "Bad request."
}
```

### 5. ソースコードの構成
├───── node_modules  
├─────__test__  
│　　　　　├───── fibonacci.test.js (fibonacci.jsのユニットテスト)  
│　　　　　└───── index.test.js (APIテスト)  
├───── fibonacci.js (フィボナッチ数を返す関数のモジュール)  
├───── index.js (Expressのモジュール)  
├───── router.js (ルーティングのモジュール)  
├───── server.js (サーバーの起動)  
├───── package.json  
└───── package-lock.json  
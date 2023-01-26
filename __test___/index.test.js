const app = require('../index')
const request = require('supertest')

describe('GETリクエスト /fib', () => {
  it('クエリパラメータが n=1 のとき', async () => {
    const response = await request(app).get('/fib?n=1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"result": 1});
  });

  it('クエリパラメータが n=10 のとき', async () => {
    const response = await request(app).get('/fib?n=10');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"result": 55});
  });

  it('クエリパラメータが n=100 のとき', async () => {
    const response = await request(app).get('/fib?n=100');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({"result": 354224848179261915075});
  });

  it('クエリパラメータが n=-1 のとき', async () => {
    const response = await request(app).get('/fib?n=-1');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({"status": 400, "message": "Bad request."});
  });

  it('クエリパラメータが n=String のとき', async () => {
    const response = await request(app).get('/fib?n=String');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({"status": 400, "message": "Bad request."});
  });
})
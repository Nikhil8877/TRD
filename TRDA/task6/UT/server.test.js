const request = require('supertest');
const app = require('../api/server');

describe('GET /users', () => {
  it('responds with json', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toEqual('application/json');
    expect(res.body).toEqual(expect.any(Array));
  });
});

describe('POST /users', () => {
  it('creates a new user', async () => {
    const res = await request(app).post('/users').send({ 
      name: 'Jane' 
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(expect.any(Object));
    expect(res.body.user.name).toEqual('Jane');
  });
});
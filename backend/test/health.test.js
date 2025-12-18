const request = require('supertest');
const app = require('../src/app');

describe('Health API', () => {
  test('GET /api/health should return ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

const request = require('supertest');
const app = require('../src/app');

describe('Auth API', () => {
  const user = {
    email: 'ci@test.com',
    password: '123456',
    name: 'CI User'
  };

  test('Signup user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send(user);
    expect(res.statusCode).toBe(201);
  });

  test('Login user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send(user);
    expect(res.body).toHaveProperty('token');
  });
});

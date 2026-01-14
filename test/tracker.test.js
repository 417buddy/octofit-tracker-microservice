const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  if (mongoServer) await mongoServer.stop();
});

test('POST /api/track -> create and GET /api/track/:id', async () => {
  const payload = { userId: 'user123', deviceId: 'device-x', steps: 5000 };
  const postRes = await request(app).post('/api/track').send(payload).expect(201);
  expect(postRes.body.success).toBe(true);
  const id = postRes.body.data._id;

  const getRes = await request(app).get(`/api/track/${id}`).expect(200);
  expect(getRes.body.success).toBe(true);
  expect(getRes.body.data.userId).toBe('user123');
});

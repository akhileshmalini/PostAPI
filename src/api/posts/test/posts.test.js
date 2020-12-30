import request from 'supertest';
import app from '@server';

describe('Post Endpoints', () => {
  it('Get All Posts', async () => {
    const res = await request(app).get('/api/posts/all');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('post');
  });
});

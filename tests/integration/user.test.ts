import request from 'supertest';
import mongoose from 'mongoose';
import User from '../../models/user.model';

let server: any;

describe('api/users', () => {
  beforeEach(() => {
    // eslint-disable-next-line global-require
    server = require('../../index');
  });
  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });
  afterAll((done) => {
    mongoose.connection.close();
    done();
  });
  describe('GET /', () => {
    it('should return all users', async () => {
      await User.collection.insertMany([
        { name: 'user1' },
        { name: 'user2' },
        { name: 'user3' }
      ]);
      const res = await request(server).get('/api/users');

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(3);
      expect(res.body.some((g: any) => g.name === 'user1')).toBeTruthy();
      expect(res.body.some((g: any) => g.name === 'user2')).toBeTruthy();
      expect(res.body.some((g: any) => g.name === 'user3')).toBeTruthy();
    });
  });
});

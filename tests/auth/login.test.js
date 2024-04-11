import chai from 'chai';
import request from 'supertest';
import app from '../../app.wrapper.cjs'; // Adjust the path if needed

// Explicitly declare types
const expect = chai.expect;

describe('Auth Tests > Login', () => {
  it('should log in a user with valid email and password', async () => {
    const email = 'testuser@example.com';
    const password = 'testpassword';
    
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email, password });

    expect(response.status).to.equal(200); // Adjust status code if needed
    // Assert on response data (e.g., token)
    expect(response.body).to.have.property('token');
  });

  it('should not log in with invalid email or password', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wronguser@example.com', password: 'invalidpassword' });

    expect(response.status).to.equal(401); // Adjust status code if needed
    // Assert on error message or response data
  });
});

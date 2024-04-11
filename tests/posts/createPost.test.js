const chai = require('chai');
const request = require('supertest');
const app = require('../../app.wrapper.cjs'); // Adjust path if needed

const expect = chai.expect;

describe('Post Tests > Create Post', () => {
  it('should create a post successfully with valid data and authorization', async () => {
    const token = 'your-valid-auth-token';
    const postData = {
      title: 'Test Post Title',
      content: 'This is a test post content.'
    };

    const response = await request(app)
      .post('/api/posts') // Adjust endpoint URL if needed
      .set('Authorization', `Bearer ${token}`)
      .send(postData);

    expect(response.status).to.equal(201); // Adjust status code if needed
    // Assert on response data (e.g., created post ID)
    expect(response.body).to.have.property('id');
  });

  // ... other test cases without type annotations
});


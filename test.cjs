
const mocha = require('mocha');
const path = require('path'); // For path handling

async function runTests() {
  try {
    const appWrapper = await loadApp();
    const app = await appWrapper; // Await the resolved app instance

    const supertest = require('supertest')(app);

    // Load test suites dynamically
    const authTests = await import('./tests/auth/login.test.js');
    await authTests(supertest); // Pass supertest to test function

    const postTests = await import('./tests/posts/createPost.test.js');
    await postTests(supertest);

    // ... other test suites
  } catch (error) {
    console.error('One or more tests failed:', error);
  }
}

async function loadApp() {
  try {
    return await import('./app.wrapper.cjs');
  } catch (error) {
    console.error('Failed to load app wrapper:', error);
    throw error; // Re-throw to prevent test execution without the app
  }
}

(async () => {
  try {
    mocha.run(runTests);
  } catch (error) {
    console.error('Tests failed prematurely:', error);
  }
});


# BLOG API

**Powered by ALGO8**

Welcome to the BLOG API! This project provides a robust backend for managing blog content and interactions.

## Getting Started

### 1. Installation

**Steps:**

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up database:**

Create a MySQL database.
Execute the SQL queries in BlogDB.sql to create the database schema.  

### 2. Environment Variables
Create a ```.env``` file in the project's root directory and define the following variables:
   ```
   DB_USER=your_database_username
   DB_PASSWD=your_database_password
   PRIVATEKEY=your_private_key 
   ```
### 3. Run the Server
    
   ```
   node server.js
   ```

## Testing

Run tests with:


     npm test

## Documentation

API Routes:

### Auth Routes:

```POST /signup:```

Registers a new user with required credentials.
Validates user data using ```signupValidator```.
Handled by the signup function in ```authController.js```.

```POST /login:```

Authenticates existing users and generates access tokens.
Validates login credentials using ```loginValidator```.
Handled by the login function in ```authController.js```.

### Post Routes:

```POST /write:```

Creates a new blog post.
Requires a valid access token (```verifyToken middleware```).
Handled by the createPost function.

```PUT /update:```

Updates an existing blog post.
Requires authentication (```verifyToken```).
Handled by the updatePost function.

```DELETE /delete:```

Deletes a specific blog post.
Requires authentication (```verifyToken```).
Handled by the deletePost function.

```GET /:```

Lists all available blog posts.
Requires authentication (```verifyToken```).
Handled by the listPosts function.

```GET /post:```

Retrieves a single blog post by its ID.
Requires authentication (```verifyToken```).
Handled by the readPost function.
Additional Notes:

All routes are defined within their respective Express router modules (```authRoutes.js``` and ```postRoutes.js```).
Authentication and validation are applied using middleware functions (```verifyToken```, ```signupValidator```, ```loginValidator```).
Controller functions (```signup```, ```login```, ```createPost```, etc.) handle the core logic for each route.





# blog-api

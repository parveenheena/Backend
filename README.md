# Masai Library Backend

This project serves as the backend for the Masai Library, allowing customers to browse and purchase books online.

## Features

- User authentication and authorization with JWT tokens
- CRUD operations for managing books
- Placing orders and viewing order history
- Proper error handling and validation

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JSON Web Tokens (JWT) for authentication

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine.

2. Install dependencies using npm:

```bash
npm install


### Set up environment variables:

Create a .env file in the root directory.
Define the following environment variables:
PORT=<port_number>
MONGO_URL=<mongodb_connection_string>
JWT_SECRET=<jwt_secret_key>

4. Start the server:
#bash
npm run server

## API Documentation

**Authentication**

Register User
URL: /api/register
Method: POST
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "isAdmin": false
}
Success Response:
Status Code: 201
Response Body:
json
Copy code
{
  "msg": "User registered successfully!"
}
Error Response:
Status Code: 400
Response Body: Error message
User Login
URL: /api/login
Method: POST
Request Body:
json
Copy code
{
  "email": "john@example.com",
  "password": "password123"
}
Success Response:
Status Code: 201
Response Body:
json
Copy code
{
  "msg": "Logged in successfully!",
  "token": "<jwt_token>"
}
Error Response:
Status Code: 200
Response Body: Error message
Books
Get All Books
URL: /api/books
Method: GET
Success Response:
Status Code: 200
Response Body: Array of book objects
Get Book by ID
URL: /api/books/:id
Method: GET
Success Response:
Status Code: 200
Response Body: Book object
Add New Book
URL: /api/books
Method: POST
Request Body:
json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "category": "Fiction",
  "price": 20.99,
  "quantity": 10
}
Success Response:
Status Code: 201
Response Body:
json
Copy code
{
  "msg": "Book added successfully!"
}
Error Response:
Status Code: 400
Response Body: Error message
Orders
Place Order
URL: /api/order
Method: POST
Request Body:
json
Copy code
{
  "books": ["book_id1", "book_id2"],
  "totalAmount": 41.98
}
Success Response:
Status Code: 201
Response Body:
json
Copy code
{
  "msg": "Order placed successfully!"
}
Error Response:
Status Code: 500
Response Body: Error message
Get All Orders
URL: /api/orders
Method: GET
Success Response:
Status Code: 200
Response Body: Array of order objects

### Deployed Link

https://backend-oxw8.onrender.com/

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

```
npm install

```

3. Set up environment variables:

- Create a .env file in the root directory.
- Define the following environment variables:
- PORT=<port_number>
- MONGO_URL=<mongodb_connection_string>

4. Start the server:
#bash
npm run server

## API Documentation

**Authentication**

- Register User
  - URL: /api/register
  - Method: POST
- User Login
  - URL: /api/login
  - Method: POST

- Books
  - URL: /api/books
  - Method: GET

- Get Book by ID
  - URL: /api/books/:id
  - Method: GET

- Add New Book
  - URL: /api/books
  - Method: POST

- Orders
  - Place Order
  - URL: /api/order
  - Method: POST

- Get All Orders
  - URL: /api/orders
  - Method: GET


### Deployed Link

https://backend-oxw8.onrender.com/

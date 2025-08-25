# Swagger Node Demo API

![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-red)

A simple Node.js project demonstrating **Swagger (OpenAPI) documentation** with **Express.js**.  
You can view and test your API endpoints interactively using Swagger UI.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Swagger API Docs](#swagger-api-docs)
- [Available Scripts](#available-scripts)
- [Routes](#api-routes)

---

## Project Structure

```bash
swagger-node/
├── src/
│ ├── routes/
│ │ └── user.route.js # Sample user routes with Swagger comments
│ └── app.js # Main server file
├── package.json
├── generate-swagger.js # Optional script to generate swagger.json
└── .gitignore
```

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd swagger-node
```

2. Install dependencies:

`npm install`

3. Install dependencies:

`npm install`

## Running the server

Start the server:

`npm start`

Start server in development mode with auto-reload:

`npm run dev`

Server will run on:

`http://localhost:3000`

## Swagger API Docs

` http://localhost:3000/api-docs`

- View all endpoints

- Try requests directly in the browser

- See request/response schemas

## Available Scripts

| Script    | Command           | Description                               |
| --------- | ----------------- | ----------------------------------------- |
| `start`   | `npm start`       | Start the server normally                 |
| `dev`     | `npm run dev`     | Start server with auto-reload (nodemon)   |
| `swagger` | `npm run swagger` | Generate static `swagger.json` (optional) |

## API Routes

`GET /api/users`

- Description: Get all users

- Response example:

```bash
[{
"id": "1",
"name": "John Abhram",
"email": "john@abhram.com"
}]
```

`POST /api/users`

- Description: Create a new user

- Request body example:

```bash
{
"id": "2",
"name": "Jane Doe",
"email": "jane@example.com"
}
```

- Response: Returns the created user object with status 201 Created.

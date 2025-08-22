const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

const PORT = 3000;

//Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger Node Demo API",
      version: "1.0.0",
      description: "API documentation with swagger in Node js",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

//Swagger route
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//ROutes
const userRoutes = require("./routes/user.route");
app.use("/api/users", userRoutes);

//Server
app.listen(PORT, () => {
  console.log(`Server running on port :::: ${PORT}`);
  console.log(`Swagger Docs available at ::: ${PORT}/api-docs`);
});

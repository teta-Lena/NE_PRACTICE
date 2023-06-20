require("dotenv").config();

const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const swaggerJSDOC = require("./swagger.json");
const routes = require("./routes/index");
const morgan = require("morgan");
// const db = require("./config/database");
const sequelize = require("./models/users.model").sequelize;
sequelize
  .sync()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSDOC, { explorer: true })
);

app.get("/welcome", (req, res) => {
  res.send("Welcome home");
});

app.use("/", routes);

// app.use("/users", userRoutes);

// its equivalent is require("./routing/userrouting")(app)

module.exports = app;

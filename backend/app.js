const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//route imports
const user = require("./routes/userRoute");
<<<<<<< HEAD
const users = require("./controllers/usersController");

app.use("/api/v1", user);
app.use("/api/v1", users);
=======
const filerouter = require("./routes/fileroute");
const templaterouter = require("./routes/templatesRoute");

app.use("/api/v1", user);
app.use("/api", filerouter);
app.use("/api", templaterouter);
>>>>>>> 93af78ec03e0d800d288aecc7a7aef022b023034

//middleware for errors
app.use(errorMiddleware);

module.exports = app;

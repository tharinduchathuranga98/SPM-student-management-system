const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//route imports
const user = require("./routes/userRoute");
const router = require("./routes/studentGrpsRoute");

app.use("/api/v1", user);
app.use("/studentGrps", router);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;

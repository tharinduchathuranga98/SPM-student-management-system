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
const filerouter = require("./routes/fileroute");
const templaterouter = require("./routes/templatesRoute");

app.use("/api/v1", user);
app.use("/api", filerouter);
app.use("/api", templaterouter);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;

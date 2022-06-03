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
const postRoutes = require('./controllers/researchTopicReg');
const postRoutesSupervisor = require('./controllers/supervisorResearchField');
const postRoutesCoSupervisor = require('./controllers/coSupervisorField');

app.use("/api/v1", user);
app.use("/api", filerouter);
app.use("/api", templaterouter);
app.use("/api", errorMiddleware);
app.use("/api", postRoutes);
app.use("/api", postRoutesSupervisor);
app.use("/api", postRoutesCoSupervisor);

const users = require("./controllers/usersController");

app.use("/api/v1", user);
app.use("/api/v1", users);

module.exports = app;

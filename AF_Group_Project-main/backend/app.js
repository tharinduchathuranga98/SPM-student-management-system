const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//route imports
const user = require("./routes/userRoute");
const users = require("./controllers/usersController");
const filerouter = require("./routes/fileroute");
const templaterouter = require("./routes/templatesRoute");
const evaluationpre = require("./routes/evaluationpre");
const adfileroute = require("./routes/adfileroute");

const postRoutes = require("./controllers/researchTopicReg");
const postRoutesSupervisor = require("./controllers/supervisorResearchField");
const postRoutesCoSupervisor = require("./controllers/coSupervisorField");

const router = require("./routes/studentGrpsRoute");

app.use("/api/v1", user);
app.use("/api/v1", users);
app.use("/api/v1", filerouter);
app.use("/api/v1", adfileroute);
app.use("/api/v1", evaluationpre);
app.use("/api/v1", templaterouter);
app.use("/api/v1", postRoutes);
app.use("/api/v1", postRoutesSupervisor);
app.use("/api/v1", postRoutesCoSupervisor);

app.use("/studentGrps", router);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;

const app = require("./app");
const { default: mongoose } = require("mongoose");

//config
// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
const DB_URL =
  "mongodb+srv://project01:project01@afproject.n2ih4.mongodb.net/AF_Project?retryWrites=true&w=majority";

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB Connected");
  })

  .catch((err) => console.log("DB connection error", err));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const mongoose = require("mongoose");
const url =
  "mongodb+srv://xmahmoudx1900:38119345m@learn-mongodb.gvgmjba.mongodb.net/?retryWrites=true&w=majority&appName=learn-mongodb";

mongoose.connect(url).then(() => {
  console.log("mongodb server is started");
});

app.use(express.json());

const coursesRoute = require("./routes/courses.route");

app.use(("/", coursesRoute));

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/index");

const app = express();
const PORT = 3001;
const MONGODB_URI = "mongodb://localhost:27017/articles";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mounting of routing  middlware
app.use("/api", router);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.once("open", function() {
  console.log("Connected to database.");
});

mongoose.connection.on("error", function(error) {
  console.log("Mongoose connection error : " + error);
});

console.log(PORT);
app.listen(PORT, function() {
  console.log(`server listening on port ${PORT}`);
});

//mongodb+srv://pchessah:<password>@easeria-pw3gd.mongodb.net/test?retryWrites=true&w=majority

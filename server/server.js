const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const mongoDB = process.env.MONGODB_URI || require("./config/db").db;

mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.error(error);
    }
  }
);

app.use(express.json({ extended: false }));

app.use("/api/recipes", require("./routes/recipes"));
app.use("/api/favourites", require("./routes/favourites"));
app.use("/api/auth", require("./routes/authentication"));
app.use("/api/users", require("./routes/users"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build/")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

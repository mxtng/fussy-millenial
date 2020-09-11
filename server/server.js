const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// MongoDB connection
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

// Incoming request parser middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/recipes", require("./routes/recipes"));
app.use("/api/favourites", require("./routes/favourites"));
app.use("/api/users", require("./routes/users"));

// Static files path
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build/")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../client/build/index.html")
    );
  });
}

// Port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

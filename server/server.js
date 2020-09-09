const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect(
  process.env.MONGODB_URI || require("./config/db").db,
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
  app.use(express.static("../client/build"));
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

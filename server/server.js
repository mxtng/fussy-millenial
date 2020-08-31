const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.json());

app.use("/api/recipes", require("./routes/recipes"));
app.use("/api/favourites", require("./routes/favourites"));
app.use("/api/auth", require("./routes/authentication"));
app.use("/api/users", require("./routes/users"));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

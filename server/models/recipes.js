const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
});

module.exports = mongoose.model("recipe", recipeSchema);

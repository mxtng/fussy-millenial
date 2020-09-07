const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  _id: { type: Number, required: true },
  image: String,
  title: String,
  usedIngredients: Array,
  missedIngredients: Array,
});

module.exports = mongoose.model("recipe", recipeSchema);

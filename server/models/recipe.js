const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  recipeId: { type: Number, required: true },
  image: String,
  title: String,
  usedIngredients: Array,
  missedIngredients: Array,
});

module.exports = mongoose.model("recipe", recipeSchema);

const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe");
const User = require("../models/user");

const auth = require("../auth/auth");

router.put("/", auth, async (req, res) => {
  try {
    const {
      id,
      userId,
      image,
      title,
      usedIngredients,
      missedIngredients,
    } = req.body;

    const recipe = new Recipe({
      user: userId,
      recipeId: id,
      image,
      title,
      usedIngredients,
      missedIngredients,
    });

    await recipe.save();

    res.send(req.body);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const { user } = req.body;

    const recipes = await Recipe.find({ user }).select("-_id -user -__v");
    res.send(recipes);
  } catch (error) {
    console.error(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) return res.status(400).send("Recipe not found");

    await recipe.remove();

    res.send("Favourite recipe removed");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;

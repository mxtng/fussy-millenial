const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipes");

router.post("/", async (req, res) => {
  try {
    const { name, ingredients } = req.body;

    const newRecipe = Recipe({
      name,
      ingredients,
    });

    const recipe = await newRecipe.save();

    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

module.exports = router;

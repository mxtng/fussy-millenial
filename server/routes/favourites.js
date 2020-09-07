const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe");

router.put("/", async (req, res) => {
  try {
    const { id, image, title, usedIngredients, missedIngredients } = req.body;

    const recipe = new Recipe({
      _id: id,
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

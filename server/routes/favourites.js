const express = require("express");
const router = express.Router();
const auth = require("../auth/auth");
const Recipe = require("../models/recipe");

// Route: "/api/favourites"
// Method: GET
// Description: Retrieve user's favourite recipe list
router.get("/", auth, async (req, res) => {
  try {
    const { user } = req.body;
    const recipes = await Recipe.find({ user }).select("-_id -user -__v");
    res.send(recipes);
  } catch (error) {
    console.error(error.message);
  }
});

// Route: "/api/favourites"
// Method: PUT
// Description: Update user's favourite recipe list
router.put("/", auth, async (req, res) => {
  try {
    const {
      recipeId,
      user,
      image,
      title,
      usedIngredients,
      missedIngredients,
    } = req.body;

    const recipe = new Recipe({
      user,
      recipeId,
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

// Route: "/api/favourites/:id"
// Method: DELETE
// Description: Remove user's favourite recipe
router.delete("/:id", auth, async (req, res) => {
  try {
    const { user } = req.body;
    await Recipe.findOneAndDelete({ user, recipeId: req.params.id });
    res.send("Favourite recipe removed");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;

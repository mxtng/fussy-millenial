const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiKey = process.env.API_KEY || require("../config/db").apiKey;

// Route: "/api/recipes"
// Method: POST
// Description: Fetch recipes from spoonacular
router.post("/", async (req, res) => {
  try {
    const { ingredients, recipeCount } = req.body;

    const fetchRecipes = await axios.get(
      "https://api.spoonacular.com/recipes/findByIngredients",
      {
        params: {
          apiKey,
          ingredients,
          number: recipeCount,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.send(fetchRecipes.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

module.exports = router;

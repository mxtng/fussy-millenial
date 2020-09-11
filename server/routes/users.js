const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const secretKey = process.env.SECRET_KEY || require("../config/db").secretKey;

// Route: "/api/users/register"
// Method: POST
// Description: User Registration
router.post(
  "/register",
  [
    check("name").not().isEmpty(),
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).send("Email already exists");

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const token = jwt.sign({ id: user.id }, secretKey);

      res.send(token);
    } catch (error) {
      console.error(error.message);
      res.status(400).send("Registration Failed");
    }
  }
);

// Route: "/api/users/login"
// Method: POST
// Description: User login
router.post(
  "/login",
  [check("email").isEmail(), check("password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).send("Invalid Credentials");

      const verification = await bcrypt.compare(password, user.password);
      if (!verification) return res.status(400).send("Invalid Credentials");

      const token = jwt.sign({ id: user.id }, secretKey);

      res.send(token);
    } catch (error) {
      console.error(error.message);
      res.status(400).send("Login Failed");
    }
  }
);

module.exports = router;

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("token");

  if (!token) return res.status(400).send("Authorization denied");

  jwt.verify(token, require("../config/db").secretKey, (err, decoded) => {
    if (err) return res.status(400).send(err);

    req.body.user = decoded.id;

    next();
  });
};
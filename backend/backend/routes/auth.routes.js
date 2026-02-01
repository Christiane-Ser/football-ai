const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: "Identifiants incorrects" });
  }

  res.json({ message: "Connexion réussie" });
});

module.exports = router;

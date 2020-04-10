const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("WELL I MUST SAY THIS IS PRETTY COOL.");
});

module.exports = router;
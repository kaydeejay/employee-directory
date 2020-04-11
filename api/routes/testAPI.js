const express = require('express');
const router = express.Router();
const Employee = require("../models/Employee");

router.get("/", (req, res, next) => {
  Employee.find({})
    .then(dbRes => {
      res.json(dbRes);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
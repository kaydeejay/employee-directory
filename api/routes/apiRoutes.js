const express = require('express');
const router = express.Router();
const Employee = require("../models/Employee");

// root url: http://localhost:9000/api
router.get("/findall", (req, res) => {
  Employee.find({})
    .then(dbRes => {
      res.json(dbRes);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/firstname", (req, res) => {
  Employee.find({}).sort({ "firstName": 1 })
    .then(dbRes => {
      res.json(dbRes);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/lastname", (req, res) => {
  Employee.find({}).sort({ "lastName": 1 })
    .then(dbRes => {
      res.json(dbRes);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
var express = require("express");

// var burger = require("../models");

var db = require("../models")

var router = express.Router();

router.get("/", function (req, res) {
  db.burger.findAll({}).then(function (burger) {
    var hbsObject = {
      burgers: burger
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  db.burger.create({
    burger_name: req.body.name
  }).then(function (dbBurger) {
    console.log("created the thing");
    res.json(dbBurger);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  db.burger.update({
    devoured: 1
  },{
    where: {
      id: req.params.id
    }}).then(function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

module.exports = router;
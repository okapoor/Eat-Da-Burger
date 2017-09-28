var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");



router.get("/", function(req, res) {
	burger.all((result) => {
		var obj = {
			burger: result,
		}

		res.render("index", obj);
	})
})

router.post("/", function(req, res) {
	burger.addBurger(req.body.burgername, false, () => {
		res.redirect("/");
	})
})

router.put("/", function(req, res) {
	burger.updateBurger(req.body.burgername, req.body.devoured, req.body.id, () => {
		res.redirect("/");
	})
})

module.exports = router;

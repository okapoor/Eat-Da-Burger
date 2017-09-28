var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



router.get("/", function(req, res) {
	burger.all((result) => {
		console.log(result);
		var obj = {
			burgers: result,
		}

		res.render("index", obj);
	})
})

router.post("/", function(req, res) {
	console.log("============")
	console.log(req.body.burgername)
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

var orm = require ("../config/orm.js");


var burger = function () {
	all: 	function(cb) {
		orm.selectAll("burgers", (result) => {
			cb(result);
		});
	},
	addBurger: function(burgername, devoured, cb) {
		// insertOne: function(tablename, cols, values, cb) {
		orm.insertOne("burgers", ["burger_name", "devoured"], [burgername, devoured], (result) => {
			cb(result);
		})
	}
	updateBurger: function(burgername, devoured, cb) {
		//updateOne: function(tablename, objColVals, condition, cb) 
		orm.updateOne("burgers", {burger_name: burgername, devoured: devoured}, "burger_name="+burgername, (result) => {
			cb(result);
		} )
	}
};

module.exports = burger;
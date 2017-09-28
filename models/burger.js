var orm = require ("../config/orm.js");


var burger = {
	all: 	function(cb) {
		orm.selectAll("burgers", (result) => {
			cb(result);
		});
	},
	addBurger: function(burgername, devoured, cb) {
		// insertOne: function(tablename, cols, values, cb) 
		console.log("We recieved burgername of  " + burgername + "and devoured state as " );
		orm.insertOne("burgers", ["burger_name", "devoured"], [burgername, devoured], (result) => {
			cb(result);
		})
	},
	updateBurger: function(burgername, devoured, id, cb) {
		//updateOne: function(tablename, objColVals, condition, cb) 
		orm.updateOne("burgers", {devoured: true}, "id="+id, (result) => {
			cb(result);
		})
	}
};

module.exports = burger;
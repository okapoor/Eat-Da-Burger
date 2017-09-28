var connection = require("./connection.js");


// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


var orm = {
	selectAll: function(tablename, cb) {
		var query = "select * from " + tablename;
		connection.query(query, (error, result) => {
			if (error) throw error;

			cb(result);
		})
	},
	insertOne: function(tablename, cols, values, cb) {
		// var sql = "insert into " + tablename + " (" + cols.toString() + ") values (\"" + values.toString() + "\") ";

	    var queryString = "INSERT INTO " + tablename;

	    queryString += " (";
	    queryString += cols.toString();
	    queryString += ") ";
	    queryString += "VALUES (?,?";
	    queryString += ") ";

	    // console.log(queryString);

		connection.query(queryString,values, (error, result) => {
			if  (error) throw error.stack;

			cb(result);
		})
	},
	updateOne: function(tablename, objColVals, condition, cb) {

		console.log(objColVals);
		console.log(condition);
	    var queryString = "UPDATE " + tablename;
	    queryString += " SET ";
	    queryString += objToSql(objColVals);
	    queryString += " WHERE ";
	    queryString += condition;

	    console.log(queryString);
	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      cb(result);
	    });
	}
};

module.exports = orm;
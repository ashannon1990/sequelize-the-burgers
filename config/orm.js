var connection = require("../config/connection.js");


var orm = {

  selectAll: function (cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function (err, result) {
          if (err) throw err;
          cb(result);
      })
  },

  insertOne: function (burgerName, cb) {
      var queryString = 'INSERT INTO burgers (burger_name) VALUES ("';
      queryString += burgerName;
      queryString += '")';

      console.log(queryString);
      
      connection.query(queryString, function (err, result) {
          if (err) throw err;
          cb(result);
      });
  },
  // updateOne()
  updateOne: function (burgerId, cb) {
      var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ";
      queryString += burgerId;

      console.log(queryString);
      
      connection.query(queryString, function (err, result) {
          if (err) throw err;
          cb(result);
      });
  },
};


module.exports = orm;
var mysql = require('../lib/db_connection').getDbConnection();

var dbUtils = {

	getAllCategories: function(callback, errorCallback, customDbConnection) {
        mysql = customDbConnection || mysql;
        mysql.query('SELECT * from categories', function(err, rows, fields) {
            err ? errorCallback(err) : callback(rows);
        });
    }

}

module.exports = dbUtils;
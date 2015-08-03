var express = require('express');
var mysql = require('mysql');

var dbConnection = {
    getDbConnection: function(connectionParams) {
        var connection = {};
        if (connectionParams) {
            connection = mysql.createConnection(connectionParams);
        } else {
            connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: "dashboard"
            });
        }
        return connection;
    }
}

module.exports = dbConnection;
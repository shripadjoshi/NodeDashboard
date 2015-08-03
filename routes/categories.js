var express = require('express');
var router = express.Router();
var dbUtils = require("../appUtils/dbUtils");

/* redirect to error page */
function redirectToError(error, res) {
    res.location("error");
    res.redirect("/error?errorMessage=Error while serving the request try again" /* + JSON.stringify(error)*/ );
}

/* GET categories listing. */
router.get('/', function(req, res, next) {
    categories = dbUtils.getAllCategories(function(categories) {
        res.render('categories',
            { title : 'Categories',
            categories: categories }
        );      
    }, function(error) {
        redirectToError(error, res);
    });    
});


module.exports = router;



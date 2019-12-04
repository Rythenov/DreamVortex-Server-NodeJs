var express = require('express');
var login = require('./../business/login');
var router = express.Router();

/* GET login listing. */
router.get('/', function(req, res, next) {
    var query = req.query;
    console.log(query);
    var userName = query.userName;
    var password = query.password;
    var isOk = login.login(userName, password);
  res.send('respond with a resource');
});

module.exports = router;
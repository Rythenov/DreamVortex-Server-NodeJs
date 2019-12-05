var express = require('express');
var userBus = require('../business/userbus');
var router = express.Router();

/* GET login listing. */
router.get('/', function(req, res, next) {
    var query = req.query;
    console.log(query);
    var userName = query.userName;
    var password = query.password;
    userBus.login(userName, password, (loginRes) =>{
      res.send(loginRes);
    });
});

module.exports = router;
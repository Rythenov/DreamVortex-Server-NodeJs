var express = require('express');
var userBus = require('../business/userbus');
var router = express.Router();

/* GET signin listing. */
router.get('/', function(req, res, next) {
    var query = req.query;
    console.log(query);
    var userName = query.userName;
    var password = query.password;
    userBus.signin(userName, password, (loginRes) =>{
      res.send(loginRes);
    });
});

module.exports = router;
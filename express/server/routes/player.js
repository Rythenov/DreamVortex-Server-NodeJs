var express = require('express');
var playerbus = require('../business/playerbus');
var router = express.Router();

/* GET player listing. */
router.get('/', (req, res, next) => {
    var query = req.query;
    console.log(query);
    playerbus.exec(query, (playerBusExecRes) => {
        res.send(playerBusExecRes);
    });
});


module.exports = router;
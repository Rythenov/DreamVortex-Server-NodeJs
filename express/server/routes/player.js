var express = require('express');
var playerbus = require('../business/playerbus');
var router = express.Router();

/* GET signin listing. */
router.get('/', (req, res, next) => {
    var query = req.query;
    console.log(query);
    var type = query.type;
    if(type == 'create'){
        createPlayer(query, res);
    }  
});
//test url
//http://localhost:8888/player?type=create&user_id=5&player_name=testName&player_job=warrior&player_lv=1&player_maxhp=10&player_maxmp=10&player_exp=0&player_cardstack={}&player_cardgroup={}&player_currentcardgroup=0&player_gold=100
function createPlayer(query, res){
    var user_id = query.user_id;
    var player_name = query.player_name;
    var player_job = query.player_job;
    var player_lv = query.player_lv;
    var player_maxhp = query.player_maxhp;
    var player_maxmp = query.player_maxmp;
    var player_exp = query.player_exp;
    var player_cardstack = query.player_cardstack;
    var player_cardgroup = query.player_cardgroup;
    var player_currentcardgroup = query.player_currentcardgroup;
    var player_gold = query.player_gold;
    //需要检查参数
    playerbus.create(user_id
        , player_name
        , player_job
        , player_lv
        , player_maxhp
        , player_maxmp
        , player_exp
        , player_cardstack
        , player_cardgroup
        , player_currentcardgroup
        , player_gold
        , (playerCreateRes) =>{
    res.send(playerCreateRes);
    });
}

module.exports = router;
var playerdb = require('../database/playerdb');
var createTag = 'create';
var getTag = 'get';

//业务解析
function exec(query, callback){
    if(query.type == createTag){
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
        create(user_id
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
            ,callback);
    }
    else if(query.type == getTag){
        var user_id = query.user_id;
        get(user_id, callback);
    }
    else {
        callback('unknow commond');
    }
}


//创建
//test url
//http://localhost:8888/player?type=create&user_id=5&player_name=testName&player_job=warrior&player_lv=1&player_maxhp=10&player_maxmp=10&player_exp=0&player_cardstack={}&player_cardgroup={}&player_currentcardgroup=0&player_gold=100
function create (user_id
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
    , callback){
    playerdb.insertPlayer(user_id
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
        , (res, err) => {
        if(err == null && res == null){
            callback('succ');
        }
        else{
            callback('failed');
        }
    });
}

//获取
//testurl
//http://localhost:8888/player?type=get&user_id=5
function get (user_id, callback){
    playerdb.selectPlayerByUserId(user_id, (res, err) => {
        if(err == null && res != null){
            callback(res);
        }
        else{
            callback('failed');
        }
    })
}

module.exports = {
    exec
}
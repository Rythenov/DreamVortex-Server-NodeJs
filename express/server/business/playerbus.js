var playerdb = require('../database/playerdb');

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

function get (user_id, callback){
  /*  playerdb.selectUser(userEmail, (res, err) => {
        if(err == null && res != null){
            if(res.user_password == password){
                 callback(res);
            }
            else{
                callback('failed');
            }
        }
        else{
            callback('failed');
        }
    })*/
}

module.exports = {
    create,
    get
}
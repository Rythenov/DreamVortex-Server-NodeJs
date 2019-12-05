var sqlite3 = require('sqlite3').verbose();
var playerdb = new sqlite3.Database('data/db/player.db');
var createPlayerTableString = "create table IF NOT EXISTS player(user_id integer not null primary key,player_name varchar(255) not null unique,player_job varchar(16) not null,player_lv integer not null,player_maxhp integer not null,player_maxmp integer not null,player_exp integer not null,player_cardstack string not null,player_cardgroup string not null,player_currentcardgroup integer not null,player_gold integer not null)";
var insertPlayerString = "insert into player(user_id, player_name, player_job, player_lv, player_maxhp, player_maxmp, player_exp, player_cardstack, player_cardgroup, player_currentcardgroup, player_gold) values(?,?,?,?,?,?,?,?,?,?,?)";
function createPlayerDB(callback){
    playerdb.run(createPlayerTableString, (res, err) => {
        callback(res, err);
    });
}

function insertPlayer(user_id
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
    createPlayerDB((err, res) => {
        if(err){
            callback(res, err);
        }
        else{
            playerdb.run(insertPlayerString
                ,[user_id
                    , player_name
                    , player_job
                    , player_lv
                    , player_maxhp
                    , player_maxmp
                    , player_exp
                    , player_cardstack
                    , player_cardgroup
                    , player_currentcardgroup
                    , player_gold]
                , (err, res) =>{
                        callback(res, err);
                })
        }
    })
}

module.exports = {
    insertPlayer
}
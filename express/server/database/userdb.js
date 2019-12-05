var sqlite3 = require('sqlite3').verbose();
var userdb = new sqlite3.Database('data/db/user.db');
var createUserTableString = "create table IF NOT EXISTS user(user_id integer not null primary key autoincrement,user_email varchar(255) not null unique,user_password varchar(16) not null)";
var insertUserString = "insert into user(user_email, user_password) values(?, ?)";
var selectUserByEmail = "select * from user where user_email == ?";
function createUserDB(callback){
    userdb.run(createUserTableString, (res, err) => {
        callback(res, err);
    });
}

function insertUser(userEmail, password, callback){
    createUserDB((err, res) => {
        if(err){
            callback(res, err);
        }
        else{
            userdb.run(insertUserString
                ,[userEmail, password]
                , (err, res) =>{
                        callback(res, err);
                })
        }
    })
}

function selectUser(userEmail, callback){
    userdb.get(selectUserByEmail, userEmail, (err, res) =>{
            callback(res, err);       
    });
}

module.exports = {
    createUserDB,
    insertUser,
    selectUser
}
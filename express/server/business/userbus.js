var userdb = require('../database/userdb');

function login (userEmail, password, callback){
    userdb.insertUser(userEmail, password, (res, err) => {
        if(err == null && res == null){
            callback('succ');
        }
        else{
            callback('failed');
        }
    });
}

function signin (userEmail, password, callback){
    userdb.selectUser(userEmail, (res, err) => {
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
    })
}

module.exports = {
    login,
    signin
}
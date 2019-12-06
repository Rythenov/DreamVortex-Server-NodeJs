var userdb = require('../database/userdb');
//注册
//testurl
//http://localhost:8888/login?userName=1&password=2
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


//登录
//testurl
//http://localhost:8888/signin?userName=4&password=1 
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
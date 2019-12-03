//##################### 
//node.js 学习文件
//#####################

//&//EventEmitter学习
{
    const events = require('events');
    const eventEmitter = new events.EventEmitter();
    //一、无参
    //1.定义事件回调函数
    function onSomeEvent(){
       console.log('in function someEvent');
    }
    //2.绑定事件与事件回调
        eventEmitter.on('some_event', onSomeEvent);
    //3.发射事件
    setTimeout(() => {
        eventEmitter.emit('some_event');
    }, 1000);
    //二、一参
    //1.定义事件回调函数
    function onSomeEventOneArg(arg1){
        console.log('in function onSomeEventOneArg' + arg1);
    }
    //2.绑定事件与事件回调
    eventEmitter.on('some_event_one_arg', onSomeEventOneArg);
    //3.发射事件
    setTimeout(() => {
        eventEmitter.emit('some_event_one_arg','arg1arg');
    }, 1000);
    //三、多参
    //1.定义事件回调函数
    function onSomeEventThreeArg(arg1, arg2, arg3){
        console.log('in function onSomeEventOneArg' 
        + arg1 + arg2 + arg3);
    }
    //2.绑定事件与事件回调
    eventEmitter.on('some_event_three_arg', onSomeEventThreeArg);
    //3.发射事件
    setTimeout(() => {
        eventEmitter.emit('some_event_three_arg'
        , 'arg1'
        , 'arg2'
        , 'arg3');
    }, 1000);
}

//&//解析请求
const http = require("http");
const url = require("url");
const querystring = require('querystring');


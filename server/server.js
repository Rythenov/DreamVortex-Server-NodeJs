//&服务器模块
//http模块
const http = require("http");
//url模块
const url = require("url");
//querystring模块
const querystring= require('querystring');

function start(route){
    function onRequest(request, response){
        console.log('recv a request');
        //获取端口号后的路径名
        var pathName = url.parse(request.url).pathname;
        console.log('pathName : ' + pathName);
        //传递给路由
        route(pathName);
        //获取请求体
        var queryString = url.parse(request.url).query;
        console.log('querystring : ' + queryString);
        //回复
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Hello, this is server");
        response.end();
    }
    //创建服务器
    http.createServer(onRequest).listen(8888);
    console.log("Server running at http://127.0.0.1:8888");
}
//导出
exports.start = start;

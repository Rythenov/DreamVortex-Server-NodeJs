# DreamVortex-Server-NodeJs
梦漩涡-服务器-NodeJs
Game：https://github.com/Rythenov/DreamVortex-CocosCreator-Game

请首先关注更新日志
-------------------------------------------

# 预览方式
Building...

# 更新日志
2019-12-06 19:27 更新
----------
commit：  
1.删除原有模块，改用express框架。  
2.添加user、player路由。  
3.目前包括 注册：user\login、登录：user\signin、创建角色：player\create、查询角色：player\get。 4.测试url一览：  
用户注册：http://localhost:8888/login?userName=1&password=2  
用户登录：http://localhost:8888/signin?userName=4&password=1  
角色创建：http://localhost:8888/player?type=create&user_id=5&player_name=testName&player_job=warrior&player_lv=1&player_maxhp=10&player_maxmp=10&player_exp=0&player_cardstack=%7B%7D&player_cardgroup=%7B%7D&player_currentcardgroup=0&player_gold=100  
角色查询：http://localhost:8888/player?type=get&user_id=5  


2019-12-03 23:16 更新
-----------------------------
commit:  
1.添加learning.js 主要用于学习Node.js。  
2.添加server.js 作为服务器模块。  
3.添加router.js 作为路由模块。  
4.添加index.js 作为启动模块。  

on the way:  
1.学习log，先把log基础打好，方便查看日志（自己封装一个log？）.  
2.学习请求的处理与事件的分发。  
3.暂定使用sqlite，具体数据结构有待思考。  
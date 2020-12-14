# redis

## maven引入
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
</dependency>
```
## 配置
```yaml
# 以下配置根据实际情况修改
spring:
  redis:
    host: localhost
    port: 6379
    database: 0
    timeout: 5000
    password: 123456
    jedis:
      pool:
        max-active: 100
        max-idle: 10
        max-wait: 10000
        min-idle: 0
```
## 使用
```js
import redis;   //导入redis模块
var value = 'hello';
//通过redis.命令名(命令参数,命令参数,.....,命令参数) 进行调用，其中命令名不区分大小写
redis.set('key',value); //调用set命令
redis.setex('key',10,value);    //调用setex命令
return redis.get('key');    //调用get命令
```

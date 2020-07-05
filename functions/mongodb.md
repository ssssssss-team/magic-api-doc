# mongodb

## maven引入
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```
## 配置
```yaml
# 以下配置根据实际情况修改
spring:
  data:
    mongodb:
      host: localhost
      port: 27017
      database: magciaapi
      username: magciaapi
      password: 123456
```
## 使用
```js
import mongo;   //导入mongodb模块
//插入多条数据
mongo.databaseName.collectionName.insert([{key : value},{key : value}]);
//插入单条数据
mongo.databaseName.collectionName.insert({key : value});
//查询数据
mongo.databaseName.collectionName.find({key : value}).skip(2).limit(1).list();
//修改数据
mongo.databaseName.collectionName.update({key : oldValue},{key : newValue});
mongo.databaseName.collectionName.updateMany({key : oldValue},{key : newValue});
//查询总数
mongo.databaseName.collectionName.count({key : value});
mongo.databaseName.collectionName.count();
//删除数据
mongo.databaseName.collectionName.remove({key : value});
mongo.databaseName.collectionName.removeOne({key : value});
```

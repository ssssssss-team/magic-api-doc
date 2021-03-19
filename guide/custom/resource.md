# 自定义接口存储

## 使用内置存储方案

### 数据库
#### 使用配置文件
```yml
magic-api:
  resource:
    type: database # 配置存储在数据库中
    tableName: magic_api_file # 数据库中的表名
    datasource: magic #指定数据源（单数据源时无需配置，多数据源时默认使用主数据源，如果存在其他数据源中需要指定。）
    prefix: /magic-api # key前缀
    readonly: false # 是否是只读模式
```
#### 使用代码配置
```java
@Bean
public Resource databaseResource(JdbcTemplate jdbcTemplate){
    /**
     *  magic_api_file 为表名，其表结构为
     *  file_path varchar(512) 主键
     *  file_content mediumtext/clob(mysql/oracle)
     *  0.7以上版本将不再提供建表语句，需自行建表
     */
    return new DatabaseResource(jdbcTemplate, "magic_api_file");
}
```
### Redis
#### 使用配置文件
```yml
magic-api:
  resource:
    type: redis# 配置存储在redis中
    prefix: magic-api # key前缀
    readonly: false # 是否是只读模式
```
#### 使用代码配置
```java
@Bean
public Resource redisResource(StringRedisTemplate redisTemplate){
    // magic-api为key的前缀
    return new RedisResource(redisTemplate, "magic-api");
}

```

## 自定义存储方案
编写java代码如下：
```java
import org.ssssssss.magicapi.adapter.Resource;
//这里选择实现Resource接口，也可以继承RedisResource、DatabaseResource等方式重写部分逻辑
@Component // 注入到spring环境中，默认采用本实现
public class CustomResource implements Resource {
    
}
```

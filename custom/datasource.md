# 配置多数据源

编写java代码如下：
```java
@Bean
public DynamicDataSource dynamicDataSource(){
    DynamicDataSource dynamicDataSource = new DynamicDataSource();
    // 设置默认数据源（默认数据源一定要设置，且名称必须是null）
    dynamicDataSource.put(null,ds1);
    dynamicDataSource.put("slave",ds2);
    return dynamicDataSource;
}
```
脚本中使用：
```js
<!-- 使用slave数据源，如果不填则使用默认数据源 -->
//从slave库中查询
db.slave.select('select * from sys_user');
//使用默认数据源
db.select('select * from sys_user');  
```
# 配置多数据源

编写java代码如下：
```java
// 你可以在运行时调用这个对象的方法进行动态添加/删除/查询数据源
@Bean
public MagicDynamicDataSource magicDynamicDataSource(){
    MagicDynamicDataSource dynamicDataSource = new MagicDynamicDataSource();
    dynamicDataSource.setDefault(ds1); // 设置默认数据源
    dynamicDataSource.add("slave",ds2);
    return dynamicDataSource;
}
```
脚本中使用：
```js
//从slave库中查询
db.slave.select('select * from sys_user');
//使用默认数据源
db.select('select * from sys_user');  
```
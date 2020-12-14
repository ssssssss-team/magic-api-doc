# SQL缓存

## 配置缓存
```yaml
magic-api:
  cache-config:
    enable: true  #开启缓存，默认是不开启的
    capacity: 1000 #缓存总容量,默认是10000
    ttl: 3600000 #有效期1小时，默认-1 即永不过期
```
## 使用缓存
```javascript
//使用名为userCache的缓存进行查询
db.cache('userCache').select('select * from sys_user');

//使用userCache缓存，有效期为3秒
//db.cache('userCache',3000).select('select * from sys_user');

//刷新缓存，当执行update操作时会触发刷新缓存的操作。
db.cache('userCache').update('delete from sys_user where id = #{id}')
```
## 缓存原则
- 缓存key计算方法：`MD5(sql+ ":" + params)`
- 执行`update`方法时会刷新缓存
- 执行`select`系列方法时，会将结果存至缓存
- 不同缓存之间互不干扰

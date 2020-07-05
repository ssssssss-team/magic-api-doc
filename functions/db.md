# db
## 引用模块
db是默认引入的模块，所以无需引入
## select
- 入参：`sql`:`String`
- 返回值：`List<Map<String,Object>>`
- 函数说明：查询`List`结果
```js
return db.select('select * from sys_user');
```
## selectInt
- 入参：`sql`:`String`
- 返回值：`Integer`
- 函数说明：查询`int`结果
```js
//需要保证结果返回一行一列
return db.selectInt('select count(*) from sys_user');   
```
## selectOne
- 入参：`sql`:`String`
- 返回值：`Map<String,Object>`
- 函数说明：查询单个对象
```js
return db.selectOne('select * from sys_user limit 1'); 
```
## selectValue
- 入参：`sql`:`String`
- 返回值：`Object`
- 函数说明：查询单个值
```js
//需要保证结果返回一行一列 
return db.selectValue('select user_name from sys_user limit 1');  
```
## page
- 入参：`sql`:`String`
- 入参：`limit` : `long`   可省略
- 入参：`offset` : `long`   可省略
- 返回值：`Object`  默认返回为Object，如果自定义了分页结果，则返回自定义结果
- 函数说明：分页查询
```js
//需要保证结果返回一行一列 
return db.page('select * from sys_user');  
```
## update
- 入参：`sql`:`String`
- 返回值：`Integer`
- 函数说明：执行增删改操作
```js
return db.update('delete from sys_user'); 
```
## cache
- 入参：`cacheName`:`String`
- 入参：`ttl`:`long` 缓存有效期，单位毫秒，可省略，默认为配置的值
- 返回值：`db`  //返回当前实例，即可以链式调用
- 函数说明：使用缓存
```js
//使用缓存名为user的查询
return db.cache('user').select('select * from sys_user');
``` 
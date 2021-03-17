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
## transaction
- 入参：`callback`:`Function`，回调函数，可省略
- 返回值：`Object`
- 函数说明：开启事务

- 自动事务
```javascript
var val = db.transaction(()=>{
    var v1 = db.update('...');
    var v2 = db.update('....');
    return v2;
});
return val;
```
- 手动开启事务
```js
var tx = db.transaction();  //开启事务
try{
    var value = db.update('...');
    db.commit();    // 提交事务
    return value;
}catch(e){
    db.rollback();  // 回滚事务
}
```

## 单表操作API <Badge text="1.0.0+" type="error"/>

操作入口：`db.table('table_name')`

### column
- 入参：`column`: `String` 列名
- 作用：设置要查询列的,`select`语句中有效

### column
- 入参：`column`: `String` 列名
- 入参： `value` : `Object` 值
- 作用：设置要操作的列的值,非`select`语句中有效

### primary
- 入参：`primary`: `String` 主键
- 作用：设置主键列，在`update`中语句有效，或`save`方法判断标准

### insert
- 入参: `data` : `Map` insert的列和值，可省略(通过column设置)
```js
// insert into sys_user(user_name,role) values('李富贵','admin')
return db.table('sys_user').insert({ user_name : '李富贵', role : 'admin'})
```
### update
- 入参: `data` : `Map` insert的列和值，可省略(通过column设置)
```js
// update sys_user set user_name = '王二狗' where id = '1'
return db.table('sys_user').primary('id','1').update({ user_name : '王二狗'})
```

### select
查询list（与db.select 作用相同）
```js
// select * from sys_user
return db.table('sys_user').select()
```

### page
分页查询（与db.page 作用相同）
```js
// select * from sys_user
return db.table('sys_user').page()
```

### where

设置查询条件

- eq --> `==`
- ne --> `<>`
- lt --> `<`
- gt --> `>`
- lte --> `<=`
- gte --> `>=`
- in --> `in`
- notIn --> `not in`
- like --> `like`
- notLike --> `not like`

```js
// select * from sys_user where user_name like '%李富贵%' and role = 'admin'
return db.table('sys_user')
    .where()
    .like('user_name','%李富贵%')
    .eq('role','admin')
    .select()
```
#### 其它的自己摸索吧，API抄的mybatis-plus，文档写不动了
# 增删改查

## 查询List
```javascript
var sql = "select * from sys_user";    
return db.select(sql);  //返回List
```
## 动态参数
当执行SQL需要动态参数时，可以使用#{} ${} ?{} 来表示
### #{expression}
`#{expression}`的作用是把参数替换成占位符`?`，与`mybatis`中的`#{}`作用一致
```js
return db.select('select * from sys_user where id = #{id}');
// 最终生成的sql为：select * from sys_user where id = ?
```
### ${expression}
`#{expression}`的作用是把参数拼接到`SQL`中，与`mybatis`中的`${}`作用一致
```js
return db.select("select * from sys_user where id = '${id}'");
// 最终生成的sql为：select * from sys_user where id = '123'
```

### ?{condition,expression}
`?{condition,expression}`的作用是先判断，如果条件成立则拼接后部分内容`SQL`中，与`mybatis`中的`if`标签基本一致
```js
return db.select("select * from sys_user ?{id,where id = #{id}}");
// 当id有值时切,生成SQL：select * from sys_user where id = ?`，相当于mybatis中的<if test="id != nulla nd id != ''">
// 当id无值时,生成SQL：select * from sys_user
return db.select("select * from sys_user ?{id!=null&&id.length() > 3,where id = #{id}}");
// 当id!=null&&id.length() > 3判断为true时,生成SQL：`select * from sys_user where id = ?
// 当判断为false时,生成SQL：select * from sys_user

## 查询数量
```javascript
var sql = "select count(*) from sys_user";
return db.selectInt(sql);   //返回int
```

## 查询Map
```javascript
var sql = "select * from sys_user limit 1";
return db.selectOne(sql);   //返回Map
```

## 列名转换
```javascript
var sql = "select * from sys_user limit 1";
return db.upper().selectOne(sql);   //返回Map 并且列名转为大写。
// 转为小写 采用 db.lower()
// 保持原样 采用 db.default()
// 驼峰命名 采用 db.camel()
// 其它可以自定义实现列名转换。
```

## 查询值
```javascript
//#{id}表示从请求参数或PathVariable中获取参数
var sql = "select username from sys_user where id = #{id}";    
return db.selectValue(sql); //返回String 
```
## 增删改
```javascript
//#{id}表示从请求参数或PathVariable中获取参数
var sql = "delete from sys_user where id = #{id}";    
return db.update(sql); //返回int 
```
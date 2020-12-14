# 使用事务

## 自动事务
```javascript
var val = db.transaction(()=>{
    var v1 = db.update('...');
    var v2 = db.update('....');
    return v2;
});
return val;
```
## 手动事务
```js
var tx = db.transaction();  //开启事务
try{
    var value = db.update('...');
    tx.commit();    // 提交事务
    return value;
}catch(e){
    tx.rollback();  // 回滚事务
}
```
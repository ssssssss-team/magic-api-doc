# magic
## 引用模块
```javascript
import magic;
```
## call
- 入参：`method`:`String`
- 入参：`path`:`String`
- 入参：`parameters`:`Map`
- 返回值：`Object`
- 函数说明：执行MagicAPI中的接口,带code和message信息
```js
return magic.call('get','execute/sql',{
    message : 'Hello,Magic API!' //传入参数 
})
```
## execute
- 入参：`method`:`String`
- 入参：`path`:`String`
- 入参：`parameters`:`Map`
- 返回值：`Object`
- 函数说明：执行MagicAPI中的接口,原始内容，不包含code以及message信息
```js
return magic.execute('get','execute/sql',{
    message : 'Hello,Magic API!' //传入参数 
})
```
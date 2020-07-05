# 集合以及数组

为`Collection`,`Iterator`,`Enumeration`,`Object[]` 添加的扩展方法

## map
- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：将集合进行循环转换
```js
var list = [1,2,3,4,5];
return list.map(e=>e+1);    //返回[2,3,4,5,6]
```
## filter
- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：将集合进行过滤
```js
var list = [1,2,3,4,5];
return list.filter(e=>e>3);    //返回[4,5]
return list.filter((item,index)=>index>1);    //返回[3,4,5]
```
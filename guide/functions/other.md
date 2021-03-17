# 其它函数 <Badge text="0.5.5+" type="error"/>

## ifnull
- 入参：`target`:`Object`  判断的目标  
- 入参：`trueValue`:`Object`   为空时的值
- 入参：`falseValue`:`Object`  不为空时的值
- 返回值：`Object`
- 函数说明：对空值进行判断，返回特定值
```js
return ifnull(null,1) // 1
// return ifnull(0,1) // 0
```

## date_format
- 入参：`target`:`Date`    日期
- 入参：`pattern`:`String` 格式    
- 返回值：`Number`
- 函数说明：日期格式化
```js
return date_format(new Date());  // 2020-01-01 20:30:30
// return date_format(new Date(),'yyyy-MM-dd');  // 2020-01-01
```

## now
- 返回值：`Date`
- 函数说明：返回当前日期
```js
return now(); // 等同于 new Date();
```
## round
- 入参：`number`:`Number`  目标值
- 入参：`len`:`int`  要保留的小数位数 可省略，默认0
- 返回值：`Number`
- 函数说明：四舍五入保留N位小数
```js
return round(123.456d,2);  //123.46
```

## floor
- 入参：`number`:`Number`  目标值
- 返回值：`Number`
- 函数说明：向下取整
```js
return floor(123.456d);  // 123;
```

## ceil
- 入参：`number`:`Number`  目标值
- 返回值：`Number`
- 函数说明：向上取整
```js
return ceil(123.456d);  // 124;
```

## percent
- 入参：`number`:`Number`  目标值
- 入参：`len`:`int`  要保留的小数   可省略，默认0
- 返回值：`String`
- 函数说明：将数值转为百分比
```js
return percent(0.1289999999,2);  // "12.90%"
```
# Number <Badge text="0.4.7+" type="error"/>

`java.lang.Number`的扩展方法，用于数值类型的扩展

## round
- 入参：`number`:`int`  要保留的小数
- 返回值：`Number`
- 函数说明：四舍五入保留N位小数
```js
var value = 123.456d;
return value.round(2);  //123.46
```

## toFixed
- 入参：`number`:`int`  要保留的小数
- 返回值：`String`
- 函数说明：四舍五入保留N位小数(和JS一样，强制限制位数)
```js
var value = 123.456d;
return value.toFixed(10);  // "123.4560000000"
```

## floor
- 返回值：`Number`
- 函数说明：向下取整
```js
var value = 123.456d;
return value.floor();  // 123;
```

## ceil
- 返回值：`Number`
- 函数说明：向上取整
```js
var value = 123.456d;
return value.ceil();  // 124;
```

## atPercent
- 入参：`number`:`int`  要保留的小数
- 返回值：`String`
- 函数说明：将数值转为百分比
```js
var value = 0.1289999999;
return value.atPercent(2);  // "12.90%"
```
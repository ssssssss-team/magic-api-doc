# Object
`java.lang.Object`的扩展方法
## asInt
- 入参：`defaultValue`:`int`   选填，当转换失败时返回默认值，默认为`0`
- 返回值：`int`
- 函数说明：转对象为int类型
```js
var obj = '123';
return obj.asInt();
//return obj.asInt(1); //转换失败时，返回1 
```

## asDouble
- 入参：`defaultValue`:`double`   选填，当转换失败时返回默认值，默认为`0.0`
- 返回值：`double`
- 函数说明：转对象为`double`类型
```js
var obj = '123';
return obj.asDOuble();
//return obj.asDouble(1.0d); //转换失败时，返回1.0d 
```

## asDecimal
- 入参：`defaultValue`:`BigDecimal`   选填，当转换失败时返回默认值，默认为`null`
- 返回值：`BigDecimal`
- 函数说明：转对象为`BigDecimal`类型
```js
var obj = '123.456';
return obj.asDecimal();
//return obj.asDecimal(1.5m); //转换失败时，返回1.5m 
```

## asFloat
- 入参：`defaultValue`:`float`   选填，当转换失败时返回默认值，默认为`0.0f`
- 返回值：`float`
- 函数说明：转对象为`float`类型
```js
var obj = '123';
return obj.asFloat();
//return obj.asFloat(1.0f); //转换失败时，返回1.0f
```

## asLong
- 入参：`defaultValue`:`long`   选填，当转换失败时返回默认值，默认为`0L`
- 返回值：`long`
- 函数说明：转对象为`long`类型
```js
var obj = '123';
return obj.asLong();
//return obj.asLong(1L); //转换失败时，返回1L 
```

## asByte
- 入参：`defaultValue`:`byte`   选填，当转换失败时返回默认值，默认为`0b`
- 返回值：`byte`
- 函数说明：转对象为`byte`类型
```js
var obj = '123';
return obj.asByte();
//return obj.asByte(1b); //转换失败时，返回1b 
```

## asShort
- 入参：`defaultValue`:`short`   选填，当转换失败时返回默认值，默认为`0s`
- 返回值：`short`
- 函数说明：转对象为`short`类型
```js
var obj = '123';
return obj.asShort();
//return obj.asShort(1s); //转换失败时，返回1s
```

## asDate
- 入参：`formats`:`String`  可变参数，日期格式
- 返回值：`Date`
- 函数说明：转对象为`Date`类型
```js
var obj = '2020-01-01 08:00:00';
//如果obj是Number类型，且是10位数字则返回new Date(value * 1000);,如果是13位数字，则返回new Date(value);
return obj.asDate('yyyy-MM-dd HH:mm:ss','yyyy-MM-dd HH:mm');
```

## asString
- 入参：`defaultValue`:`String`   选填，当转换失败时返回默认值，默认为`null`
- 返回值：`short`
- 函数说明：转对象为`short`类型
```js
var obj = 123;
return obj.asString();
//return obj.asString("empty"); //转换失败时，返回"empty"
```
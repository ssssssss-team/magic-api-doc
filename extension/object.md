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
- 返回值：`String`
- 函数说明：转对象为`String`类型
```js
var obj = 123;
return obj.asString();
//return obj.asString("empty"); //转换失败时，返回"empty"
```

## is <Badge text="0.3.3+" type="error"/>
- 入参：`type`:`String/Class`   判断是否该类型
- 返回值：`boolean`
- 函数说明：判断是否是指定类型
```js
import 'java.util.Date' as Date;
var str = 'hello,MagicAPI';
return str.is('string'); // true
return str.is('java.lang.String'); // true
return str.is('java.lang.Integer'); // false
return str.is(Date); // false
```

## isString <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`String`类型
```js
var str = 'hello,MagicAPI';
return str.isString(); // true
```

## isInt <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`int`类型
```js
var value = 123;
return value.isInt(); // true
```

## isLong <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`long`类型
```js
var value = 123L;
return value.isLong(); // true
```

## isDouble <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`double`类型
```js
var value = 123d;
return value.Double(); // true
```

## isFloat <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`float`类型
```js
var value = 123f;
return value.isFloat(); // true
```

## isByte <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`byte`类型
```js
var value = 123b;
return value.isByte(); // true
```

## isBoolean <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`boolean`类型
```js
var value = false;
return value.isBoolean(); // true
```
## isShort <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`short`类型
```js
var value = 123s;
return value.isShort(); // true
```

## isDecimal <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`decimal`类型
```js
var value = 123m;
return value.isDecimal(); // true
```

## isDate <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是`Date`类型
```js
import 'java.util.Date' as Date;
var value = new Date();
return value.isDate(); // true
```

## isArray <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是数组
```js
var value = '123'.split('');
return value.isArray(); // true
```

## isList <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是List
```js
var value = [1,2,3];
return value.isList(); // true
```

## isMap <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是Map
```js
var value = {
    key : 'value'
};
return value.isMap(); // true
```

## isCollection <Badge text="0.3.3+" type="error"/>
- 返回值：`boolean`
- 函数说明：判断是否是集合
```js
var value = [1,2,3];
return value.isCollection(); // true
```

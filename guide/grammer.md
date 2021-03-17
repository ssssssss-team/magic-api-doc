# 脚本语法

## 关键字
|关键字|含义|
|---|---|---|
|var|定义变量|
|if|条件语句的引导词|
|else|用在条件语句中，表明当条件不成立时的分支|
|for|for循环语句|
|in|与for配合使用|
|while|while循环语句|
|continue|执行下一次循环|
|break|跳出循环|
|return|终止当前过程的执行并正常退出到上一个执行过程中|
|exit|终止当前脚本，并退出返回，如`exit 200,'执行成功',[1,2,3];` v0.5.0中新增|
|try|用于捕获可能发生异常的代码块|
|catch|与try关键字配合使用，当发生异常时执行|
|finally|与try关键字配合使用，finally块无论发生异常都会执行|
|import|导入Java类或导入已定义好的模块|
|as|与 import 关键字配合使用，用作将导入的 Java类或模块 命名为一个本地变量名|
|new|创建对象|
|true|基础类型之一，表示 Boolean 的：真值|
|false|基础类型之一，表示 Boolean 的：假值|
|null|基础类型之一，表示 NULL 值|
|async|异步调用|

## 运算符
<table>
    <thead>
        <tr>
            <th colspan="2">数学运算</th>
            <th colspan="2">比较运算</th>
            <th colspan="2">逻辑运算</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>+</td>
            <td>加法</td>
            <td>&lt;</td>
            <td>小于</td>
            <td>&&</td>
            <td>并且</td>
        </tr>
        <tr>
            <td>-</td>
            <td>减法</td>
            <td>&lt;=</td>
            <td>小于等于</td>
            <td>||</td>
            <td>或者</td>
        </tr>
        <tr>
            <td>*</td>
            <td>乘法</td>
            <td>&gt;</td>
            <td>大于</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>/</td>
            <td>除法</td>
            <td>&gt;=</td>
            <td>大于等于</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>%</td>
            <td>取模</td>
            <td>==</td>
            <td>等于</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>++</td>
            <td>自增</td>
            <td>!=</td>
            <td>不等于</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>--</td>
            <td>自减</td>
            <td>===</td>
            <td>等于</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>!==</td>
            <td>不等于</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

## 类型
|类型|写法|
|---|---|---|
|byte|`123b`、`123B`|
|short|`123s`、`123S`|
|int|`123`|
|long|`123l`、`123L`|
|float|`123f`、`123F`|
|double|`123d`、`123D`|
|BigDecimal|`123m`、`123M`|
|boolean|`true`、`false`|
|string|`'hello'`|
|string|`"hello"`|
|string|`"""多行文本块,主要用于编写SQL"""`|
|Pattern|`/\d+/g`,`/pattern/gimuy` 用于定义正则，v0.5.0中新增|
|lambda|`()=>expr`、`(param1,param2....)=>{...}`|
|list|`[1,2,3,4,5]`|
|map|`{key : value,key1 : value}`|

{$key : "value"}//$key表示动态从变量中获取key值

## 一元运算符

您可以通过一元运算`-`符将数字取反，例如`-234`。要取反布尔表达式，可以使用`!`运算符，例如`!true`。
自增/自减 `i++` 、 `++i`、`i--`、`--i`

## 算术运算符

支持常见的算术运算符，例如`1 + 2 * 3 / 4 % 2`，同样也支持`+=`、`-=`、`*=`、`/=`、`%=`

## 比较运算符

`23 < 34`，`23 <= 34`，`23 > 34`，`23 >= 34`，`true != false`，`23 == 34`

比较运算符结果为`boolean`类型

## 逻辑运算符

除了一元运算`!`符，您还可以使用`&&`和`||`。就像Java中一样，运算符也是一种短路运算符。如果`&&`左边计算为`false`，则不会计算右边。如果`||`左侧为true，则不会计算右边
在0.4.6+版本中增强了`&&` `||` 不再强制两边必须是布尔类型。作用与`JS`一样

## 三元运算符

三元运算符是`if`语句的简写形式，其工作方式类似于Java中，例如`true ? "yes" : "no"`
在0.4.3+版本中，增强了`if` 和三元运算符，不再强制值必须是布尔类型，可以写`if(xxx)`的形式当`xxx`为以下情况时为`fasle`、其它情况为`true`
- `null`
- 空集合
- 空Map
- 空数组
- 数值==0
- 非空字符串
- `false`

### 类型转换 <Badge text="0.7.0+" type="error"/>

可使用`::type(defaultValue)` 的方式进行类型转换，如
```javascript
var a = "123"::int; // 123
var b = "abc"::int(111); // 111
var c = "2020-01-01"::date('yyyy-MM-dd'); // 转换为date
```

### 可选链操作符
可选链操作符(`?.`)允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。`?.`操作符的功能类似于`.`链式操作符，不同之处在于，在引用为空 的情况下不会引起错误，该表达式短路返回值是 `null`。

当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链操作符也是很有帮助的。
```javascript
obj?.prop
obj?.method(args)
```

示例：
```javascript
var a = null;
var b = a?.name;    // b = null;
var c = a?.getName();   // c = null;
```

### 扩展运算符

扩展运算符，又叫展开语法(Spread syntax)， 是用于将list或map在语法层面展开；

语法:
> lambda 调用
```javascript
var sum = (a,b,c) => a + b + c;
System.out.println(sum(...[1,2,3]))
/*
结果：6
*/
```
> list 展开
```javascript
var arr = [3,4,5];
System.out.println([1,2,...arr,6,7])
/*
结果：[1, 2, 3, 4, 5, 6, 7]
*/
```
> list 展开到 map 中
```javascript
var arr = [3,4,5];
System.out.println({key1:1,...arr})
/*
结果：{key1=1, 0=3, 1=4, 2=5}

虽然这些key看起来像数值，但其实是String类型的key，如果把它们转为JSON看起来是这样的：

{"key1":1, "0":3, "1":4, "2":5}

*/
```

> map 展开
```javascript
var map = {key2:2}
System.out.println({key1:1,...map,key3:3})
/*
结果：{key1=1, key2=2, key3=3}
*/
```


## for循环

当前for循环只支持两种，循环集合或Map

#### 循环集合
```javascript
import 'java.lang.System' as System;
var list = [1,2,3];
for(index,item in list){    //如果不需要index，也可以写成for(item in list)
    System.out.println(index + ":" + item);
}
/*
结果：
0:1
1:2
2:3
*/
```

#### 循环指定次数
```javascript
var sum = 0;
for(value in range(0,100)){    //包括0包括100
    sum = sum + value; //不支持+= -= *= /= ++ -- 这种运算
}
return sum;
/*
结果：5050
*/
```
## while循环 <Badge text="0.4.4+" type="error"/>
```javascript
var count = 100;
var sum = 0;
while(count){
    sum = sum + count;
    count = count - 1;
}
return sum; // 5050
```

#### 循环map
```javascript
import 'java.lang.System' as System;
var map = {
    key1 : 123,
    key2 : 456
};
for(key,value in map){    //如果不需要key，也可以写成for(value in map)
    System.out.println(key + ":" + value);
}
/*
结果：
key1:123
key2:456
*/
```

## Import导入

#### 导入Java类
```javascript
import 'java.lang.System' as System;//导入静态类并赋值给system作为变量
import 'javax.sql.DataSource' as ds;//从spring中获取DataSource并将值赋值给ds作为变量
import 'org.apache.commons.lang3.StringUtils' as string;//导入静态类并赋值给ds作为变量

System.out.println('调用System打印');//调用静态方法
System.out.println(ds);
System.out.println(string.isBlank('')); //调用静态方法
```

## new创建对象

#### 创建对象
```javascript
import 'java.util.Date' as Date;//创建之前先导包，不支持.*的操作
return new Date();
```

#### 导入已定义的模块
```javascript
import log; //导入log模块，并定义一个与模块名相同的变量名
//import log as logger; //导入log模块，并赋值给变量 logger
log.info('Hello {}','Magic API!')
```

## 异步调用 <Badge text="0.4.2+" type="error"/>

#### 异步调用方法
```javascript
var val = async db.select('.....'); // 异步调用，返回Future类型
return val.get();   //调用Future的get方法
```

#### 异步调用lambda
```javascript
var list = [];
for(index in range(1,10)){
    list.add(async (index)=>db.selectInt('select #{index}'));
}
return list.map(item=>item.get());  // 循环获取结果
```

## 类型转换 <Badge text="0.7.0+" type="error"/>
通过`::`进行类型转换，如`xxx::int`、`xxx::double`等，
当前支持转换类型有`int`、`double`、`long`、`byte`、`short`、`float`、`date`
```js
var a = "1";
return {
    v1: a::int,
    v2: a::int(0),  //转换失败时，值为0
    v3: "2020-01-01"::date('yyyy-MM-dd') //转为Date
}
```

## 嵌入其它脚本语言 <Badge text="1.0.0+" type="error"/>
```js
var name = "hello";
var test = ```javascript
    name + ' ~ world'
```;
return test();
```
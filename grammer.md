# 脚本语法

## 关键字
|关键字|含义|
|---|---|---|
|var|定义变量|
|if|条件语句的引导词|
|else|用在条件语句中，表明当条件不成立时的分支|
|for|循环语句|
|in|与for配合使用|
|continue|执行下一次循环|
|break|跳出循环|
|return|终止当前过程的执行并正常退出到上一个执行过程中|
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
            <td></td>
            <td></td>
            <td>!=</td>
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
|lambda|`()=>expr`、`(param1,param2....)=>{...}`|
|list|`[1,2,3,4,5]`|
|map|`{key : value,key1 : value}`|

{$key : "value"}//$key表示动态从变量中获取key值

## 一元运算符

您可以通过一元运算`-`符将数字取反，例如`-234`。要取反布尔表达式，可以使用`!`运算符，例如`!true`。

## 算术运算符

支持常见的算术运算符，例如`1 + 2 * 3 / 4 % 2`

## 比较运算符

`23 < 34`，`23 <= 34`，`23 > 34`，`23 >= 34`，`true != false`，`23 == 34`

比较运算符结果为`boolean`类型

## 逻辑运算符

除了一元运算`!`符，您还可以使用`&&`和`||`。就像Java中一样，运算符也是一种短路运算符。如果`&&`左边计算为`false`，则不会计算右边。如果`||`左侧为true，则不会计算右边

## 三元运算符

三元运算符是`if`语句的简写形式，其工作方式类似于Java中，例如`true ? "yes" : "no"`

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
    list.add(async ()=>db.selectInt('select #{index}'));
}
return list.map(item=>item.get());  // 循环获取结果
```
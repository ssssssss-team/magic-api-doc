# Class

`java.lang.Class`的扩展方法

## newInstance
- 入参：`values`:`Object`  可变参数，构造函数的参数
- 返回值：`Date`
- 函数说明：将`Class`实例化
```js
import 'java.text.SimpleDateFormat' as SimpleDateFormat;
return SimpleDateFormat.newInstance('yyyy-MM-dd HH:mm:ss');
//其实可以简写成 new SimpleDateFormat('yyyy-MM-dd HH:mm:ss'); //这是一个语法糖 ^_^
```
# 扩展说明

## 目的
目的只有一个：为已有类型添加方法，如给`Object`类型添加`asInt`方法
## 使用
所有类型扩展使用都很简单，无需`import`直接使用
如`Object`类的扩展。
```js
var obj = '123';
return obj.asInt(); //调用Object的扩展方法asInt
```
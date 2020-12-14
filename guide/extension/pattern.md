# Pattern <Badge text="0.5.0+" type="error"/>

`java.util.regex.Pattern`的扩展方法

## test
- 入参：`source`:`String`  目标字符串
- 返回值：`boolean`
- 函数说明：校验文本是否符合正则
```js
var regx = /^\d+$/;
return regx.test('123456')  // true
```
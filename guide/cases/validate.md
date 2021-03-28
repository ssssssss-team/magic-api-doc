# 参数验证

::: tip 提示
1.0.0 版本中可在UI界面中定义
:::
## UI验证中的表达式语法

表达式语法与脚本中一致，当前变量默认为value，可使用其他参数名配套使用
如：

- `value.length() >= 6` 字符串长度至少为6个字符
- `value == 1 || value == 2` 数值必须是1或者2
- `type == '1' ? value != null && value != '' : true`  type如果为1，则此项必填

## 验证非空
```javascript
import assert;  //导入断言模块
//验证不通过时，会终止运行
assert.notBlank(message,1001,'message不能为空');
return message;
```
## 验证长度
```javascript
import assert;  //导入断言模块
//验证不通过时，会终止运行
assert.isTrue(message!=null && message.length() >=10,1003,'message长度不能小于10');
return message;
```
## 正则验证
```javascript
import assert;  //导入断言模块
//验证不通过时，会终止运行
assert.regx(message,'\d+',1004,'message必须为数字');
return message;
```

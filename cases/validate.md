# 参数验证

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

## 其它验证
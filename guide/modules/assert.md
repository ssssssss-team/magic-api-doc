# ~~assert~~ <Badge text="1.4.0+版本移除" type="error"/>
## 引用模块
```js
import assert;
```
## notNull
- 入参：`value`:`Object`  判断目标
- 入参：`code`:`int`   断言失败时返回的状态码
- 入参：`message`:`String` 断言失败时返回的状态说明
- 无返回值
- 函数说明：断言值不能为`null`，如果为`null`则抛出异常
```js
assert.notNull(id,0,'id不能为空');
```
## notEmpty
- 入参：`value`:`String`  判断目标
- 入参：`code`:`int`   断言失败时返回的状态码
- 入参：`message`:`String` 断言失败时返回的状态说明
- 无返回值
- 函数说明：断言值不能为`null`且不能为空字符串，如果为`null`或空字符串则抛出异常
```js
assert.notEmpty(id,0,'id不能为空');
```
## notBlank
- 入参：`value`:`String`  判断目标
- 入参：`code`:`int`   断言失败时返回的状态码
- 入参：`message`:`String` 断言失败时返回的状态说明
- 无返回值
- 函数说明：断言值不能为`null`且不能全是空白字符，如果为`null`或全是空白字符则抛出异常
```js
assert.notBlank(id,0,'id不能为空');
```
## isTrue
- 入参：`value`:`boolean`  判断目标
- 入参：`code`:`int`   断言失败时返回的状态码
- 入参：`message`:`String` 断言失败时返回的状态说明
- 无返回值
- 函数说明：断言值必须为`true`,如果不为`true`则抛出异常
```js
assert.isTrue(id != null,0,'id不能为空');
```
## regx
- 入参：`value`:`String`  判断目标
- 入参：`pattern`:`String`  正则
- 入参：`code`:`int`   断言失败时返回的状态码
- 入参：`message`:`String` 断言失败时返回的状态说明
- 无返回值
- 函数说明：断言正则判断通过，如果正则判断不通过则抛出异常
```js
assert.regx(id,'\d+',0,'id必须是数字');
```
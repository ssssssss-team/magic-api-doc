# Request <Badge text="0.3.3+" type="error"/>

## 引用模块
```javascript
import request;
```
## getFile 
- 入参：`name`:`string`
- 返回值：`MultipartFile`
- 函数说明：获取上传的文件
```javascript
import request;
request.getFile('image'); 
```

## getFiles 
- 入参：`name`:`String`
- 返回值：`List<MultipartFile>`
- 函数说明：获取上传的文件集合
```javascript
import request;
request.getFiles('image'); 
```

## getValues
- 入参：`name`:`String`
- 返回值：`List<String>`
- 函数说明：获取提交的数组参数
```javascript
import request;
return request.getValues('name');
```

## getHeaders
- 入参：`name`:`String`
- 返回值：`List<String>`
- 函数说明：获取请求的header数组
```javascript
import request;
return request.getHeaders('xxx');
```

## get
- 返回值：`HttpServletRequest`
- 函数说明：获取原生request对象
```javascript
import request;
request.get();
```
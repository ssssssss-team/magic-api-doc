# Response <Badge text="0.3.0+" type="error"/>

## 引用模块
```javascript
import response;
```
## page <Badge text="0.3.0+" type="error"/>
- 入参：`total`:`long`
- 入参：`values`:`list`
- 返回值：`Object`
- 函数说明：构建分页结果
```javascript
import response;
//返回： 共计10条，第一页的5条数据
return response.page(10,[1,2,3,4,5]);
```

## json <Badge text="0.3.0+" type="error"/>
- 入参：`value`:`Object`
- 返回值：`ResponseEntity`
- 函数说明：构建Json结果
```javascript
import response;
//直接返回该json，不会被包装处理
return response.json({
    success : true,
    message : '执行成功'
});
```

## download <Badge text="0.3.0+" type="error"/>
- 入参：`value`:`Object`
- 入参：`filename`:`文件名`
- 返回值：`ResponseEntity`
- 函数说明：下载文件
```javascript
import response;
return response.download('文件内容','test.txt');
```

## image <Badge text="0.3.0+" type="error"/>
- 入参：`value`:`Object`
- 入参：`mine`:`String`
- 返回值：`ResponseEntity`
- 函数说明：主要用于输出图片
```javascript
import response;
// 输出图片
return response.image(bytes,'image/png');
```

## addHeader <Badge text="0.3.3+" type="error"/>
- 入参：`key`:`string`
- 入参：`value`:`String`
- 返回值：无返回值
- 函数说明：添加Response Header
```javascript
import response;
response.addHeader('AccessToken','123');
```

## setHeader <Badge text="0.3.3+" type="error"/>
- 入参：`key`:`string`
- 入参：`value`:`String`
- 返回值：无返回值
- 函数说明：设置Response Header
```javascript
import response;
response.setHeader('AccessToken','123');
```

## addCookie <Badge text="0.3.3+" type="error"/>
- 入参：`key`:`string`
- 入参：`value`:`String`
- 入参：`options`:`Map` cookie参数，可选
- 返回值：无返回值
- 函数说明：添加Cookie
```javascript
import response;
response.addCookie('cookieKey','cookieValue');
response.addCookie('cookieKey','cookieValue',{
    path : '/',
    httpOnly : true,
    domain : 'ssssssss.org',
    maxAge : 3600
});
```

## addCookies <Badge text="0.3.3+" type="error"/>
- 入参：`cookies`:`Map` cookie Map，必填
- 入参：`options`:`Map` cookie参数，可选
- 返回值：无返回值
- 函数说明：批量添加Cookie
```javascript
import response;
response.addCookies({
    cookieKey1 : 'cookieValue1',
    cookieKey2 : 'cookieValue2',
});
response.addCookies({
    cookieKey1 : 'cookieValue1',
    cookieKey2 : 'cookieValue2',
},{
    path : '/',
    httpOnly : true,
    domain : 'ssssssss.org',
    maxAge : 3600
});
```
# http <Badge text="1.1.0+" type="error"/>

## 模块说明

`http`模块是基于`RestTemplate`封装而来，目前只做了少量的封装。
对于一些通用的配置可以使用自定义`RestTemplate`来实现

```java
@Bean
public HttpModule magicHttpModule() {
	RestTemplate template = new RestTemplate();
	// 对RestTemplate进行配置.
    // your code
	return new HttpModule(template);
}
```

## 引用模块
```javascript
import http;
```

## connect 
- 入参：`url`:`string`
- 返回值：`HttpModule`
- 函数说明：创建新的http请求对象
```javascript
import http;
http.connect("http://localhost:9999/sql/select") 
```

## 设置URL参数
## 设置表单参数
## 设置Header
```javascript
import http;
http.param('url_param1','url_param_value1') // 设置URL参数
    .param({    // 批量设置URL参数
        url_param_2 : 2,
        url_param_3 : 3,
    })
    .data('form_param1','form_param_value1') // 设置表单参数
    .data({    // 批量设置表单参数
        form_param_2 : 2,
        form_param_3 : 3,
    })
    .header('header_param1','header_param_value1') // 设置header参数
    .header({    // 批量设置header参数
        header_param_2 : 2,
        header_param_3 : 3,
    })
```

## body
- 入参：`body`:`Object`
- 函数说明：获取请求Body
```javascript
import http;
http.connect('..').body({
    id: 1,
    name: 'magic-api'
});
```

## entity
- 入参: `entity`: `HttpEntity`
- 函数说明：自定义`HttpEntity`
```javascript
import http;
http.connect('..').entity(entity)
```
## contentType
- 入参: `contentType`: `String`或`MediaType`
- 函数说明：定义请求内容类型
```javascript
import http;
http.connect('..').contentType('application/json')
```

## post
## delete
## get
## put
## execute
- 返回值：`ResponseEntity`
- 函数说明：执行对应的请求，post会自动设置为POST请求，其它同理
```javascript
import http;
return http.connect('http://localhost:9999/sql/select').post().getBody()
```
# env <Badge text="0.4.6+" type="error"/>

## 引用模块
```javascript
import env;
```
## 使用
```javascript
import env; 
return env.get('server.port')
```

## get
- 入参：`key`:`String` 配置项
- 入参：`defaultValue`:`String`    默认值，可省略
- 返回值：`String`
- 函数说明：获取`Spring`配置项

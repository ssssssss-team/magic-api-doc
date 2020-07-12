# spring-boot配置

## prefix
- 类型：`String`
- 默认值：`null`

`magic-api.prefix` 接口路径的前缀，可空

## web
- 类型：`String`
- 默认值：`null`

`magic-api.web` WEB页面的请求路径，可空，填写时开启，否则不开启，生成环境建议不开启

## banner
- 类型：`boolean`
- 默认值：`true`

`magic-api.banner` 是否打印banner

## map-underscore-to-camel-case
- 类型：`boolean`
- 默认值：`false`

`magic-api.map-underscore-to-camel-case` 是否开启下划线转驼峰命名

## throw-exception
- 类型：`boolean`
- 默认值：`false`

`magic-api.throw-exception` 执行出现异常时是否抛出异常（默认不抛出异常）

## datasource
- 类型：`String`
- 默认值：`null`(默认数据源)
`magic-api.datasource` 接口存储选择的数据源（默认使用默认数据源）

## page-config

分页配置

### page
- 类型:`string`
- 默认值:`page`

`magic-api.page-config.page`页码参数名

### size
- 类型:`string`
- 默认值:`size`

`magic-api.page-config.size`页大小参数名

### default-page
- 类型:`long`
- 默认值:`1`

`magic-api.page-config.default-page`取不到页码参数时的默认页码

### default-size
- 类型:`long`
- 默认值:`10`

`magic-api.page-config.default-size`取不到页大小参数时的默认页大小

## cache-config

缓存配置

### enable
- 类型:`boolean`
- 默认值:`false`

`magic-api.cache-config.enable`是否开启缓存(默认缓存实现是LRU+TTL)

### capacity
- 类型:`long`
- 默认值:`10000`

`magic-api.cache-config.capacity`缓存容量

### ttl
- 类型:`long`
- 默认值:`-1`

`magic-api.cache-config.ttl`缓存过期时间，默认是`-1`即永不过期

## debug-config

DEBUG配置

### timeout

- 类型:`int`
- 默认值：`60`

`magic-api.debug-config.timeout`DEBUG断点等待时间，单位秒，默认为60秒

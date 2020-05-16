---
sidebarDepth: 3
---
# magic-api

## xml-locations
- 类型：`String[]`
- 默认值：`null`

`ssssssss`所对应的XML文件位置，此项为必填项

## enable-refresh
- 类型：`boolean`
- 默认值：`true`

是否启用自动刷新XML，开发模式建议开启，生产环境建议关闭

## banner
- 类型：`boolean`
- 默认值：`true`

是否打印banner

## map-underscore-to-camel-case
- 类型：`boolean`
- 默认值：`false`

是否开启下划线转驼峰命名

## throw-exception
- 类型：`boolean`
- 默认值：`false`

执行出现异常时是否抛出异常，如果抛出异常（默认不抛出异常）

## page-config

分页配置

### page
- 类型:`string`
- 默认值:`page`

页码参数名

### size
- 类型:`string`
- 默认值:`size`

页大小参数名

### default-page
- 类型:`long`
- 默认值:`1`

取不到页码参数时的默认页码

### default-size
- 类型:`long`
- 默认值:`10`

取不到页大小参数时的默认页大小

## cache-config

缓存配置

### enable
- 类型:`boolean`
- 默认值:`false`

是否开启缓存(默认缓存实现是LRU+TTL)

### capacity
- 类型:`long`
- 默认值:`10000`

缓存容量

### ttl
- 类型:`long`
- 默认值:`-1`

缓存过期时间，默认是`-1`即永不过期

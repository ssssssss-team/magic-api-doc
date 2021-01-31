---
sidebarDepth: 3
---

# spring-boot配置

## 完整配置示例
```yml
magic-api:
  web: /magic/web # UI请求的界面以及UI服务地址
  prefix: / # 接口前缀，可以不配置
  auto-import-module: db  # 自动导入的模块
  auto-import-package: java.lang.*,java.util.* #自动导包
  refresh-interval: 0  #不启用刷新
  datasource: test # 多数据源时配置，否则不用配置
  allow-override: false #禁止覆盖应用接口
  sql-column-case: camel #启用驼峰命名转换
  editor-config: classpath:./magic-editor-config.js #编辑器配置
  banner: true # 打印banner
  thread-pool-executor-size: 8 # async语句的线程池大小
  throw-exception: false #执行出错时是否抛出异常
  cache-config: # 缓存相关配置
    capacity: 10000 #缓存容量
    ttl: -1 # 永不过期，
    enable: true # 启用缓存
  page-config:
    size: size # 页大小的参数名称
    page: page # 页码的参数名称
    default-page: 1 # 未传页码时的默认首页
    default-size: 10 # 未传页大小时的默认页大小
  security-config:  # 安全配置
    username: admin # 登录用的用户名
    password: 123456 # 登录用的密码
  swagger-config:
    version: 1.0
    description: MagicAPI 接口信息
    title: MagicAPI Swagger Docs
    name: MagicAPI 接口
    location: /v2/api-docs/magic-api/swagger2.json
  debug-config:
    timeout: 60 # 断点超时时间，默认60s
```

## prefix
- 类型：`String`
- 默认值：`null`

`magic-api.prefix` 接口路径的前缀，可空

## web
- 类型：`String`
- 默认值：`null`

`magic-api.web` WEB页面的请求路径，可空，填写时开启，否则不开启，生产环境建议不开启

## banner
- 类型：`boolean`
- 默认值：`true`

`magic-api.banner` 是否打印banner

## map-underscore-to-camel-case
- 类型：`boolean`
- 默认值：`true`

`magic-api.map-underscore-to-camel-case` 是否开启下划线转驼峰命名

## throw-exception

- 类型：`boolean`
- 默认值：`false`

`magic-api.throw-exception` 执行出现异常时是否抛出异常（默认不抛出异常）

## datasource

- 类型：`String`
- 默认值：`null`(默认数据源)

`magic-api.datasource` 接口存储选择的数据源（默认使用默认数据源）

## editor-config <Badge text="0.6.1+" type="error"/>

- 类型：`String`
- 默认值：`null`(默认不配置)

`magic-api.editor-config` 编辑器配置文件路径,具体请参考[magic-editor配置](./magic-editor)

## auto-import-module <Badge text="0.3.2+" type="error"/>

- 类型：`String`
- 默认值：`db`(默认导入db模块，多个值时用","分隔)

`magic-api.auto-import-module` 默认导入的模块

## refresh-interval <Badge text="0.3.4+" type="error"/>

- 类型：`int`
- 默认值：`0` （<=0为不启用）

`magic-api.refresh-interval` 自动刷新间隔(单位为秒)，开启后定期从数据库读取接口信息并刷新映射。

## auto-import-package <Badge text="0.4.0+" type="error"/>

- 类型：`String`
- 默认值(v0.4.0+)：`java.lang.*,java.util.*`(多个值时用","分隔，目前只支持以.*结尾的通配符)
- 默认值(v0.4.5+)：`null`，`java.lang.*,java.util.*`转为内置自动导入

`magic-api.auto-import-package` 默认导入的包

## allow-override <Badge text="0.4.0+" type="error"/>

- 类型：`boolean`
- 默认值：`false`

`magic-api.allow-override` 是否允许覆盖应用接口

## thread-pool-executor-size <Badge text="0.4.5+" type="error"/>

- 类型：`int`
- 默认值 : `0`  `<=0` 表示`CPU 核心数 * 2`

`magic-api.thread-pool-executor-size` 异步调用的线程池大小

## sql-column-case <Badge text="0.5.0+" type="error"/>

- 类型：`string`
- 默认值 : `default`、

`magic-api.sql-column-case` 列名转换规则
### 可选值
- default (保持原样)
- camel (驼峰命名)
- pascal (帕斯卡命名)
- upper (全大写)
- lower (全小写)



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

## swagger-config <Badge text="0.3.0+" type="error"/>

Swagger 配置

### name

- 类型:`string`
- 默认值:`MagicAPI接口`

`magic-api.swagger-config.name` 资源名称

### location
- 类型:`string`
- 默认值:`/v2/api-docs/magic-api/swagger2.json`

`magic-api.swagger-config.location` 资源位置

### title

- 类型:`string`
- 默认值:`MagicAPI Swagger Docs`

`magic-api.swagger-config.title` 文档标题

### description

- 类型:`string`
- 默认值:`MagicAPI 接口信息`

`magic-api.swagger-config.description` 文档描述

### version

- 类型:`string`
- 默认值:`1.0`

`magic-api.swagger-config.version` 文档版本

## security-config  <Badge text="0.4.0+" type="error"/>

安全配置

### username

- 类型: `string`
- 默认值： `null`

`magic-api.security-config.username` 配置登录用的用户名，当用户名和密码都配置时，页面需登录才能访问

### password

- 类型: `string`
- 默认值： `null`

`magic-api.security-config.password` 配置登录用的密码，当用户名和密码都配置时，页面需登录才能访问
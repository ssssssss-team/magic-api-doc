---
sidebarDepth: 3
---

# spring-boot配置

## 完整配置示例
```yml
magic-api:
  web: /magic/web # UI请求的界面以及UI服务地址
  resource: #配置存储方式
    type: database # 配置存储在数据库中
    tableName: magic_api_file # 数据库中的表名
    datasource: magic #指定数据源（单数据源时无需配置，多数据源时默认使用主数据源，如果存在其他数据源中需要指定。）
    prefix: /magic-api # key前缀
    readonly: false # 是否是只读模式
  prefix: / # 接口前缀，可以不配置
  auto-import-module: db  # 自动导入的模块
  auto-import-package: java.lang.*,java.util.* #自动导包
  allow-override: false #禁止覆盖应用接口
  sql-column-case: camel #启用驼峰命名转换
  editor-config: classpath:./magic-editor-config.js #编辑器配置
  support-cross-domain: true # 跨域支持，默认开启
  secret-key: 123456789 # 远程推送时的秘钥，未配置则不开启推送
  push-path: /_magic-api-sync #远程推送的路径，默认为/_magic-api-sync
  response: |- #配置JSON格式，格式为magic-script中的表达式
    {
      code: code,
      message: message,
      data,
      timestamp,
      requestTime,
      executeTime,
    }
  cluster-config:
    enable: false # 是否开启集群配置
  response-code-config:
    success: 1 #执行成功的code值
    invalid: 0 #参数验证未通过的code值
    exception: -1 #执行出现异常的code值
  banner: true # 打印banner
  thread-pool-executor-size: 8 # async语句的线程池大小
  throw-exception: false #执行出错时是否抛出异常
  backup-config: #备份相关配置
    max-history: -1 #备份保留天数，-1为永久保留
    resource-type: file #备份存储方式，默认为文件，可选 database
    database: magic  #指定数据源（单数据源时无需配置，多数据源时默认使用主数据源，如果存在其他数据源中需要指定。）
    table-name: magic_api_backup #使用数据库存储备份时的表名
  crud-config: # CRUD相关配置
    logic-delete-column: deleted #逻辑删除列
    logic-delete-value: 1 #逻辑删除值
  cache-config: # 缓存相关配置
    capacity: 10000 #缓存容量
    ttl: -1 # 永不过期
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

## ~~workspace~~(v1.0.0+中删除)
- 类型：`String`
- 默认值：`/data/magic-api`

`magic-api.workspace` `magic-api`的工作目录，当以`classpath:` 开头时，则可以读jar内资源，且为只读模式(一般部署使用)。
## resource <Badge text="1.0.0+" type="error"/>
### type
- 类型: `String`
- 默认值: `file`

`magic-api.resource.type` 资源存储类型，默认为存文件，可选`file`、`database`、`redis`
### location
- 类型: `String`
- 默认值: `/data/magic-api`
`magic-api.resource.location` 文件存储位置，此项配置为`file`专用，当以`classpath:` 开头时，则可以读jar内资源，且为只读模式(一般部署使用)。
### tableName
- 类型: `String`
- 默认值: `magic_api_file`
`magic-api.resource.tableName` 数据库存储时使用的表名，此项为`database`专用
### datasource
- 类型： `String`
- 默认值：`null`
`magic-api.resource.datasource`指定数据源（单数据源时无需配置，多数据源时默认使用主数据源，如果存在其他数据源中需要指定。）
### prefix
- 类型: `String`
- 默认值: `magic-api`
`magic-api.resource.prefix` 使用`database`、`redis`存储时的`key`前缀
### readonly
- 类型: `boolean`
- 默认值: `false`
`magic-api.resource.readonly` 是否为只读模式

## support-cross-domain <Badge text="1.0.0+" type="error"/>
- 类型: `Boolean`
- 默认值: `true`

`magic-api.support-cross-domain` 是否支持跨域，默认开启

## response <Badge text="1.0.0+" type="error"/>
- 类型: `String`
- 默认值: `null`

`magic-api.response` 配置`JSON`序列化格式，值为`magic-script`中的表达式

## secret-key <Badge text="1.2.1+" type="error"/>
- 类型: `String`
- 默认值: `null`

`magic-api.secret-key` 远程推送时的秘钥，未配置则不开启

## push-path <Badge text="1.2.1+" type="error"/>
- 类型: `String`
- 默认值: `/_magic-api-sync`

`magic-api.push-path` 远程推送的路径，默认为`/_magic-api-sync`

## backup-config <Badge text="1.3.5+" type="error"/>
### resource-type
- 类型: `String`
- 默认值: `file`
  
`magic-api.backup-config.resource-type` 备份存储方式，默认为`file`，可选`database`
### location
- 类型: `String`
- 默认值: `/data/magic-api/backup`
  
`magic-api.backup-config.location` 备份存储位置

### table-name
- 类型: `String`
- 默认值: `null`

`magic-api.backup-config.table-name` 使用数据库时，存储备份的表名

### database
- 类型: `String`
- 默认值: `null`

`magic-api.backup-config.database` 指定数据源（单数据源时无需配置，多数据源时默认使用主数据源，如果存在其他数据源中需要指定。）

### max-history
- 类型: `int`
- 默认值: `-1`

`magic-api.backup-config.max-history` 备份保留天数，`-1`为永久保留
  
## cluster-config <Badge text="1.2.0+" type="error"/>
### enable
- 类型: `boolean`
- 默认值: `false`

`magic-api.cluster-config.enable` 是否开启集群配置
  
### instance-id
- 类型: `String`
- 默认值: `null`

`magic-api.cluster-config.instance-id` 实例id，要保证每台机器都不同，默认启动后随机生成`uuid`，如果无特殊需要则不需要配置

## response-code-config <Badge text="1.1.2+" type="error"/>
### success
- 类型: `int`
- 默认值: `1`
 `magic-api.response-code-config.success` 执行成功的`code`值
### invalid
- 类型: `int`
- 默认值: `0`
  `magic-api.response-code-config.invalid` 参数验证未通过的`code`值
### exception
- 类型: `int`
- 默认值: `-1`
  `magic-api.response-code-config.exception` 执行出现异常的`code`值
## banner
- 类型：`boolean`
- 默认值：`true`

`magic-api.banner` 是否打印banner

## throw-exception

- 类型：`boolean`
- 默认值：`false`

`magic-api.throw-exception` 执行出现异常时是否抛出异常（默认不抛出异常）

## ~~datasource(v0.7.0+ 删除)~~

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
- 默认值 : `default`

`magic-api.sql-column-case` 列名转换规则
### 可选值
- default (保持原样)
- camel (驼峰命名)
- pascal (帕斯卡命名)
- upper (全大写)
- lower (全小写)

## crud-config <Badge text="1.3.4+" type="error"/>

CRUD相关配置

### logic-delete-column

`magic-api.crud-config.logic-delete-column` 逻辑删除列，在单表`API`中使用`logic`后，删除语句会转为`update`,查询语句会多拼接一个条件

### logic-delete-value

`magic-api.crud-config.logic-delete-column` 逻辑删除值
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
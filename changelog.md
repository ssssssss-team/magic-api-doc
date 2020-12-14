# 更新日志

## [v0.5.0] 2020.12.xx

### 界面改动
- 界面改用`VUE`重写
- 新增支持多`tab`页、自动保存
- 新增对顶部`header`的自定义配置`API`
- 新增自定义皮肤配置的`API`
- 新增请求钩子设置，主要用于支持自身应用对`UI`操作的鉴权
- 新增支持接口搜素
- 新增全局配置（用于模拟测试，全局header、全局参数等）
- 新增语法错误提示
- 接口列表改为树形结构

### 功能改动
- 新增支持数据库自定义方言
- 新增自定义配置列名转换、以及默认列名转换配置项
- 新增数据库列名转换API(`camel`、`pascal`、`upper`、`lower`、`normal`)
- 新增单表操作`API`(`insert`、`update`)
- 新增`SQL`拦截器
- 新增拦截器`RequestInterceptor`参数`request`、`response`
- 新增内置跨域处理
- 废弃`DynamicDataSource` 改用`MagicDynamicDataSource`
- 优化代码，内部包结构调整

### 脚本改动
- 新增`?.`语法，`obj?.method` 当`obj`为空时直接返回`null`
- 新增`...`自动展开语法
- 新增支持`[].xxx()`的语法
- 新增支持`(expr).xxx()`的语法
- 新增正则类型 `//gimuy`
- 新增`Pattern`扩展`test`用于校验文本是否符合正则
- 新增`exit` 语句，`exit 400,'参数填写有误';` 直接退出执行脚本，返回结果

### BUG修复
- 修复未对脚本解除包装导致读取脚本错误的BUG
- 修复分页缓存计算`Key`的BUG
- 修复变量作用域污染的问题
- 修复在请求时`ContentType`为`application/json`等类型，`RequestBody` 为空时会报错的问题
- 修复`+=`、`-=`、`/=`、`%=` 对`int`值操作时未赋值的BUG

### 其它

- 新增达梦数据库方言及脚本 [!5 添加达梦数据库方言及sql文件](https://gitee.com/ssssssss-team/magic-api/pulls/5)
- 更新`SQL`脚本，去除自带例子
- 优化文档







## [v0.4.8] 2020.11.26
- 修复`monaco-editor`引起的浏览器崩溃问题
- 修复设置线程池大小无效的问题
- 增强`!`一元运算符，支持非布尔值运算
- 修复函数命名`atPercent`变更为`asPercent`


## [v0.4.7] 2020.11.23
- 新增`Map`类型到`JavaBean`的自动隐式转换 [#I251SS](https://gitee.com/ssssssss-team/magic-api/issues/I251SS)
- 新增`session.key = value`的写法，用于向`session`中写值
- 新增集合函数`every`、`some`、`reduce`、`skip`、`limit`、`findNotNull`
- 新增`Map`函数`sort`、`each`、`asString`、`merge`、`asList`
- 新增`Number`函数 `round`、`toFixed`、`floor`、`ceil`、`atPercent`
- 新增`Date`函数 `format`
- 修复调用`lambda`时变量获取不正确的BUG [#I2632N](https://gitee.com/ssssssss-team/magic-api/issues/I2632N)
- 优化`Map`类型定义、保持书写顺序
- 优化编辑器，可以折叠`import`、以及支持在单行太长时自动换行。
- 优化编辑器高亮，支持`SQL`高亮
- 优化`Loading`界面
- 优化部分逻辑，支持`JDK9+`
- 优化内部代码，`DatabaseQuery` 重命名为 `SQLExecutor`


## [v0.4.6] 2020.11.16
- 新增函数`asBean` 用于将`map`或`list`转为Java对象 [#I251SS](https://gitee.com/ssssssss-team/magic-api/issues/I251SS)
- 新增语法`++`、`--`、`+=`、`-=`、`*=`、`/=`、`%=`、`连=`
- 新增`env`模块，用于读取配置
- 新增`.class`属性访问
- 修复`async`嵌套会产生阻塞的问题
- 修复`return`语句在不返回任何值的空指针BUG
- 修复在`async`中变量读取不正确的问题
- 修复在切换变量作用域时二次赋值不正确的BUG [#I252VY](https://gitee.com/ssssssss-team/magic-api/issues/I252VY)
- 修复在`magic-api.auto-import-package`为空时 `JS`报错的问题
- 优化生成`SQL`时产生的空白
- 优化`&&`、`||` 运算，支持`data && data.xx`、`var a = b || 1` 的写法
- 优化`magic-script`脚本变量读写性能
- 优化代码提示、参数提示
- 优化脚本异常提示

## [v0.4.5] 2020.11.09
- 新增集合函数`group`、`join`
- 新增聚合函数`max`、`min`、`avg`、`sum`
- 新增参数提示、动态数据源提示
- 新增`magic-api.thread-pool-executor-size`参数配置，用来设置`async`语句线程池大小
- 修复恢复断点时丢失`header`的问题
- 修复进入断点时，获取变量信息不正确的BUG 
- 优化`magic-api.auto-import-package` 配置，内置自动导入`java.lang.*`、`java.util.*`
- 优化`async`语句执行机制，改为在线程池中执行
- 优化代码提示，增加中文提示
- 优化`查看历史记录详情` 的SQL兼容性


## [v0.4.4] 2020.11.04
- 新增`while`循环语句
- 修复异常结果未被正常处理的BUG
- 修复UI断点与折叠点击区域重叠的问题
- 优化在请求接口打印异常日志时附带URL
- 优化脚本错误信息增加行列号


## [v0.4.3] 2020.11.03
- 修复进入断点时无法操作的BUG
- 修复新建接口时默认请求参数缺失`}`的问题
- 优化`if`语句和`三元运算符` 支持`if(xxx)` 的写法

## [v0.4.2] 2020.11.02
- 新增脚本异步调用功能
- 新增集合函数`sort`、`reserve`、`join`、`shuffle`
- 新增代码折叠功能
- 优化模拟测试，改为实际请求
- 优化对`BigDecimal`类型的代码提示
- 优化对枚举类型的代码提示
- 优化对`Spring Security`框架的支持,自动适配解决`ThreadLocal`问题
- 去除`Cookie`、`Session`模拟

## [v0.4.1] 2020.10.26

- 新增支持ClickHouse数据库
- 修复定义空字符串`""`时代码高亮不正确的BUG
- 修复冲突问题，将`DynamicDataSource`更名为`MagicDynamicDataSource`
- 修复未正确调用带有可变参数的重载方法的BUG
- 修复向页面传递配置信息时传递用户名密码的安全问题
- 优化模拟测试，在测试时将header参数放在http header中 [#I1Z6RE](https://gitee.com/ssssssss-team/magic-api/issues/I1Z6RE)
- 优化登录，禁止使用ESC键或回车键关闭登录框


## [v0.4.0] 2020.09.14
- 新增用户名、密码配置（用于页面登录，增加安全性）[#I1UTXT](https://gitee.com/ssssssss-team/magic-api/issues/I1UTXT)
- 新增`response.end`方法 [#1S5UJ](https://gitee.com/ssssssss-team/magic-api/issues/I1S5UJ)
- 新增自动导包配置(默认导入`java.util.*、java.lang.*`)
- 新增允许覆盖应用接口配置
- 优化数据库兼容性 [#I1TCFU](https://gitee.com/ssssssss-team/magic-api/issues/I1TCFU)
- 优化代码提示

## [v0.3.4] 2020.08.09
- 新增支持将请求参数存入一个变量中
- 新增支持接口自动刷新
- 优化`Map`定义，可省略`value`
- 优化`import`提示
- 修复在测试时获取不到`HttpServletRequest`的问题

## [v0.3.3] 2020.08.02
- 新增插入并返回主键
- 新增15种类型判断方法
- 新增动态增删改查数据源（用于应用运行时动态修改数据源）
- response模块新增addHeader、setHeader、addCookie、addCookies等方法
- 修复分组不能删除的BUG
- 修复在保存时，注册接口与应用本身的接口冲突的问题
- 修复第一次调用父类方法时，会报找不到方法的BUG
- 优化UI编辑器保留当前编辑信息，当意外关闭时可恢复。
- 优化DEBUG功能，支持单步调试、运行时修改断点
- 优化代码提示
- 优化分组名、分组前缀添加校验
- 完善文档

## [v0.3.2] 2020.07.26
- 新增支持配置默认导入模块
- 新增支持`BigDecimal`类型
- 修复分组前缀在以非"/"开头时的错误
- 修复DEBUG时二进制结果输出不正确的问题
- 修复重启后台后前端自动重试的BUG
- 优化脚本报错时，自动跳转到错误行

## [v0.3.1] 2020.07.20
### 新增
- Oracle建表语句
### BUG修复
- 启动报`ClassNotFoundException : springfox.documentation.swagger.web.SwaggerResourcesProvider`的BUG
- Swagger配置类循环引用的BUG
- UI界面中编辑器里无法使用回车键的BUG


## [v0.3.0] 2020.07.19

### 新增
- 历史记录查看、比对、还原
- 支持Swagger2
- 允许日志输出到页面上
- 接口分组前缀
- Response模块(可输出图片、下载文件、自定义JSON、构建分页)
### BUG修复
- RequestBody参数测试时无效的问题
### 优化
- 滚动条、图标兼容Firefox
- 优化UI体验
- 取消兼容null.方法、null.属性、null[key]、null[index]

## [v0.2.1] 2020.07.12
- **更换UI**
- 新增事务相关函数
- 新增接口使用数据源配置
- 新增接口数据源接口（可自定义接口存储，可加密脚本信息）
- 新增页面按钮权限接口
- 新增each函数
- 优化代码提示
- 代码编辑器汉化
- 修复脚本中不能给map类型赋值的问题
- 修复finally块return null的BUG
- 修复return new XXX();语句的BUG
- 修复删除失败时，接口会被取消注册的BUG

## [v0.2.0] 2020.07.05
- **抛弃XML方式，改用脚本，通过Web页面编写脚本**
- 新增脚本Debug能力
- 新增代码提示
- 新增错误提示
- 新增Redis、MongoDB的支持
- 新增API前缀以及WEB页面配置
- 新增日志、断言模块
- 新增自定义结果转换以及自定义类型扩展
- 重构自定义拦截器
- 重构SQL执行器
- 修复默认SQL缓存线程安全问题

## [v0.1.1] 2020.05.17
- 改名为magic-api,原名ssssssss
- 新增支持缓存(默认实现LRU+TTL),可自定义
- 修复多数据源时无法使用默认数据源的BUG
- 修复分页查询时未释放数据库连接的BUG
- 修复打成Jar后无法读取XML的问题
- 优化缓存获取数据库方言
- 取消验证dtd
- 完善文档

## [v0.1.0] 2020.05.11
- 修复post请求时报415错误的BUG
- 新增多数据源支持
- 新增插入返回主键
- 新增自定义主键生成策略
- 新增请求拦截器
- 新增是否抛出异常配置
- 优化dtd，改为xsd验证
- 完善文档


## [v0.0.1] 2020.05.06
- v0.0.1 正式发布
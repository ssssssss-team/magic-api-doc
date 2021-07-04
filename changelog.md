
# 更新日志

## [v1.3.1] 2021.07.05

- 新增支持自定义选择接口推送和导出 [#I3TRT4](https://gitee.com/ssssssss-team/magic-api/issues/I3TRT4)
- 新增国产化数据库人大金仓kingbase方言适配 [#I3YCN2](https://gitee.com/ssssssss-team/magic-api/issues/I3YCN2)
- 新增主动刷新功能，用于在未开启集群配置且使用同一个存储不能同步的问题。
- 修复`DEBUG`会造成多次验证的BUG
- 修复设置参数类型不生效的BUG
- 优化UI样式，将右上角不常用的图标移至右下角、以及左侧菜单优化

## [v1.3.0] 2021.06.28
- 新增`RequestBody`文档注释、属性校验，`ResponseBody` 文档注释
- 新增`response`模块的`getOutputStream`方法
- 新增`UI`配置项`defaultExpand`，用于配置是否默认展开
- 修复上传时由于读取顺序无序导致结果错乱的问题
- 修复`Swagger`文档注释被名称覆盖的问题
- 修复在调用`save`时，`Oracle`数据库可能出现空指针的BUG
- 优化`UI`上传接口对话框，全量上传时增加确认框
- 优化`UI`左侧树，新增`defaultExpand`默认是否展开配置
- 优化`UI`复制路径功能，不在弹出对话框提示。
- 优化`Swagger`文档生成，兼容`knife4j`处理
- 优化匹配数据库方言的方式，解决部分驱动不支持获取`URL`的问题

## [v1.2.2] 2021.06.15
- 新增自定义构建异常结果接口
- 新增启动后接口`URL`打印
- 修复在删除分组后，无法上传该分组的BUG
- 修复可能存在的循环引用的BUG
- 优化`UI`左侧树搜索，不在区分大小写
- 优化单表`API`，新增支持`delete`方法、`save`方法增加`beforeQuery`参数，用于判断数据是否存在的判断标准

## [v1.2.1] 2021.05.31
- 新增远程推送功能
- 新增注销登录功能
- 修复上传不支持数据源的问题
- 修复搜索未验证是否登录的问题
- 优化`UI`右键菜单，增加图标
- 优化上传逻辑，分为增量模式和全量模式

## [v1.2.0] 2021.05.24
- **新增支持集群部署**
- 新增数据源增删改查接口，可持久化保存数据源
- 修复在拦截器中抛出异常时，界面不显示结果的BUG
- 修复`Oracle`查询单行单列值时，返回值带有`ROW_ID`的问题
- [PR !13 解决swagger文档使用knife4j时不兼容，无法显示接口详情的问题](https://gitee.com/ssssssss-team/magic-api/pulls/13)
- [PR !14 [!]fix swagger文档使用knife4j时接口文档中query类型参数的数据类型显示不正确的问题（不影响swagger原生UI）](https://gitee.com/ssssssss-team/magic-api/pulls/14)
- 优化前端代码，在请求时剔除无用字段，避免一些可能存在的错误。
- 优化后端代码，删除`@Deprecated`方法
- 迁移`magic-api-spring-boot-starter`、`magic-editor`到`magic-api`仓库中

## [v1.1.3] 2021.05.18
- 新增获取函数、接口详情的接口
- 修复无法创建分组的BUG

## [v1.1.2] 2021.05.17
- 新增支持配置`json`结果`code`值
- 新增接口、函数、分组的增删改查接口。
- 修复在测试、删除数据源时未释放链接的问题
- 修复分组无法移动的问题
- 优化设置`RequestEntity`时机
- 优化构建分页结果接口，增加`RequestEntity`、`Page`参数
- 优化对`SpringBoot`的兼容性
- 优化UI样式，修复部分样式错位问题

## [v1.1.1] 2021.05.06
- 修复调用`context.get`时可能获取不到变量值的问题
- 修复`http`模块在某些情况下无法携带`hedaer`的BUG
- 修复无法创建`druid`数据源的BUG
- 修复在以组件方式引入时可能造成重复保存的BUG
- 优化`SQL`拦截器,增加参数`RequestEntity`
- 优化`Swagger`中的`RequestBody`改为非必填


## [v1.1.0] 2021.04.19
- 新增分组选项、分组路径变量配置
- 新增`json`、`stringify` 转换器，用于字符串转`JSON`和`JSON`转字符串
- 新增全局搜索功能
- 新增阻止页面关闭的配置
- 新增数据源参数`maxRows`
- 新增`http`模块(基于`RestTemplate`)
- 新增单表`API`方法`orderBy`、`groupBy`
- 新增单表`API`方法`notNull`、`notBlank` 用于过滤`where`中非空参数
- 修复断点会自动清除的BUG
- 修复使用`redis`存储时无法删除接口的BUG
- 修复脚本不支持`new`内部类的问题
- 优化测试逻辑，测试时将`serverURL`参数当为`baseURL`，不在拼接处理
- 优化`swagger`文档生成，支持`path`参数
- 优化`UI`样式，显示接口的请求方法

## [v1.0.2] 2021.04.12
- 新增示例项目 [magic-api-example](https://gitee.com/ssssssss-team/magic-api-example)
- 新增错误提示超时时间配置
- 新增单表API`delete`方法
- 修复`oracle`执行插入无法返回主键的问题
- 修复单表API中`save`方法返回的不是主键的问题
- 优化代码提高兼容性，不在强制要求配置数据源

## [v1.0.1] 2021.04.06
- 新增`uuid`函数
- 新增任意值到`Boolean`类型的隐式转换
- 修复无法访问静态内部类的问题
- 修复无法给没有初始值的变量进行赋值的BUG
- 修复无法将接口移动到接口分组上(没有分组路径)的BUG
- 修复移动接口可能造成接口重复的问题
- 修复编辑器可能无法显示内容的BUG
- 修复编辑器中`RequestBody`可能被覆盖的问题
- 修复在使用达梦数据库时，无法使用数据库存储的问题
- 修复在使用文件存储时无法创建数据源的BUG
- 优化方法调用的悬浮提示
- 优化带有可变参数的代码提示
- 优化单表API，列名现在可以从驼峰命名转为下划线
- 优化单表API的`save`方法，在执行插入时可设置主键值
- 优化单表API的主键非空判断逻辑，由`!=null`转为`notBlank`
- 优化集合函数`filter`，不在强制要求返回`Boolean`类型
- 优化部分代码，提取一些魔法字符串到常量类中

## [v1.0.0] 2021.03.29
- 新增自定义用户名密码登录验证
- 修复`函数列表`、`数据源管理` 拖动样式不正确的问题
- 修复解析文件内容时因意外的格式造成的解析错误
- 修复`readonly`在`db`、`redis`存储不生效的问题
- 修复数据源管理中异常信息显示不正常的BUG
- 修复无法为`JavaBean`属性赋值的BUG
- 修复在`RequestBody`填写错误时，无法执行测试的BUG
- 修复在配置`Long`转`String`时，历史记录时间显示不正确的问题
- 优化`UI`权限配置，使其更细致化
- 优化获取接口选项值的接口
- 优化前端读取配置的逻辑，使其更实用
- 优化前端验证逻辑，路径变量中的`value`为必填
- 优化脚本备份逻辑，减少备份次数
- 优化部分代码，兼容`Gson`，使其不在报错

## [v1.0.0-beta2] 2021.03.22
- **新增动态数据源管理(可在页面动态修改数据源)**
- **新增路径变量验证**
- 修复打成`jar`包后无法导出接口的BUG
- 修复复选框未回显的问题
- 修复在新增函数时，参数类型不回显的问题
- 修复不能关闭跨域配置的BUG
- 修复打包后无法读取`js`配置文件的问题
- 修复权限配置不正确的BUG
- 修复配置抛出异常无效的BUG
- 优化`JSON`构建接口，参数统一封装，减少方法
- 优化读取资源逻辑，增强数据库兼容性
- 优化日志打印，方便排除错误
- 优化模拟测试，增加支持路径变量配置

## [v1.0.0-beta1] 2021.03.18
### 新增功能
- 新增存储资源配置项（可在配置文件中配置存储方式）
- 新增强制只读模式
- 新增单表操作`API`
- 新增接口参数类型、默认值配置
- 新增接口参数验证、`header`验证功能(支持必填、表达式和正则验证)
- 新增自定义响应结构配置（可在配置文件中配置响应结构）
- 新增语法 **\`\`\`language \`\`\`** ，可执行对实现`JSR223`规范的脚本语言，也可自定义
- 新增接口导入、导出功能
- 新增跨域开关配置，现在可以关闭跨域功能
### BUG修复
- 修复历史记录排序不正确的问题
- 修复可能无法加载后台设置的编辑器配置的BUG
- 修复缓存在指定有效期时可能无效的BUG
- 修复驼峰命名转换在列名全大写时未转换的问题
- 修复三元表达式在赋值语句中表现不正确的BUG
### 优化
- 优化代码编辑器，增加是否要自动保存的配置
- 优化变量定义，现在可以省略赋值语句。
- 优化`Json`构建接口，增加`RequestEntity`参数可获取`request`、`response`、接口等相关参数及配置
- 优化数据库、`redis`资源读取逻辑，加快启动速度
- 优化`linq`语法，`linq`关键字不在区分大小写
- 优化`UI`界面，替换部分图标，增加`tab`页图标，方便区分`接口`、`函数`
- 优化方法调用，`lambda`表达式可隐式转换为`Java`的`FunctionalInterface`接口
- 优化方法调用，允许调用接口的`default`方法

## [v0.7.1] 2021.03.01
- 新增数据库存储、`Redis`存储方案
- 新增支持可自定义存储方式
- 新增屏蔽检测更新的选项
- 新增接口执行时间`executeTime`
- 修复无法自动注入`db`模块的BUG [I38LDB](https://gitee.com/ssssssss-team/magic-api-spring-boot-starter/issues/I38LDB)
- 修复`swagger`无法测试带有`RequestBody`的请求
- 修复类型转换时值为0的问题 [I398ND](https://gitee.com/ssssssss-team/magic-api/issues/I398ND)
- 修复在省略`as`的情况下，代码提示不正确的问题
- 修复切换脚本时，代码编辑器滚动条定位不正确的问题
- 优化生成`swagger`文档，显示接口描述
- 优化读取资源逻辑，兼容`Spring Boot` `2.1.x` `2.2.x` `2.3.x` `2.4.x`
- 优化代码，增加异常日志输出，方便定位问题

## [v0.7.0] 2021.02.22
- **弃用数据库存储方案,改为文件存储**
- 新增`===`、`!==` 比较运算符
- 新增`::int`、`::double`等类型转换语法
- 修复无法获取接口选项的问题
- 修复`#{}`结果为`null`时未拼接占位符的问题
- 优化脚本调用逻辑，可调用java方法非静态方法
- 优化`import`命令，在特定场景下可省略`as`
- 优化`swagger`支持参数默认值
- 优化`mongo`模块兼容`Spring Boot`
- 优化`==`、`!=` 逻辑，弱化类型
- 移除界面中顶部删除按钮
- [PR !1  浏览文件修复Java枚举代码提示获取不到成员的问题](https://gitee.com/ssssssss-team/magic-editor/pulls/1)

## [v0.6.1] 2021.02.01
- 新增编辑器配置，可在后端配置样式、皮肤、按钮显示控制等
- 修复`Swagger`文档接口路径未携带前缀的BUG
- 修复扩展运算符在多次运行时会导致参数错乱的问题
- 修复`RequestBody`不支持`List`的问题
- 修复断点调试时不走后置拦截器的问题
- [PR !7 优化遍历过程方法，修复分组路径修改不生效的问题](https://gitee.com/ssssssss-team/magic-api/pulls/7)
- [PR !8 修复接口里使用magic.execute调用其它接口导致上下文丢失的问题](https://gitee.com/ssssssss-team/magic-api/pulls/8)
- 优化调用`java`方法的优先级，以更合理的方式去调用
- 优化`mongodb`模块逻辑，增强兼容性
- 优化编辑器检测异常结果逻辑，不在弹框提醒

## [v0.6.0] 2021.01.04
- **新增在线自定义函数**
- 增强`import`语句，可引入其他接口或自定义的函数
- 修复函数`round`、`ceil`、`floor`、`precent`未注册的问题
- 修复`Vue`组件可能出现不刷新的问题
- 优化`ifnull` 函数，改为`ifnull(var,defaultValue)` 的形式
- 优化`magic.call/execute`方法，不在要求携带`prefix`
- 优化正则表达式语法高亮

## [v0.5.5] 2020.12.28
- **新增`Linq`式查询以及相关函数**
- 新增聚合函数`group_concat`、`count`、`sum`、`max`、`min`、`avg`
- 新增函数`round`、`ceil`、`floor`、`precent`、`date_format`、`ifnull`、`now`
- 新增自定义函数
- 优化`运行日志`输出
- 优化获取接口详情，兼容一些意外情况

## [v0.5.4] 2020.12.21
- 新增代码悬浮提示
- 修复编辑器的代码提示不完整的问题
- 修复`swagger`在带有`context-path`时`Execute`会`404`的问题
- 修复`assert`失败时，未被转换为`json`结果的BUG
- 修复接口信息中点击新增/删除`Header`或参数时，组件不刷新的问题
- 修复运行结果的组件可能不刷新的问题
- 修复复制接口时会产生覆盖的问题
- 修复脚本部分作用域未隔离的BUG
- 优化`Map`的`sort`扩展方法，增加`value`参数以支持根据`map`的`value`排序
- 优化代码提示
- 优化部分组件样式
- 示例网站新增一些`Demo`

## [v0.5.3] 2020.12.17
- 修复无法修改分组路径的BUG
- 修复sql中无法引入局部变量的BUG [#I29LQG](https://gitee.com/ssssssss-team/magic-api/issues/I29LQG)
- 修复未携带参数的BUG
- 修复引入组件浏览器会报错的问题
- 修复底部组件渲染不正确的问题

## [v0.5.2] 2020.12.16
- 修复注入不了`db`模块的BUG
- 修复`db.page`方法会报错的BUG
- 修复前端忽略版本更新时会再次提示的BUG
- 修复保存接口时可能会报空指针的BUG
- 修复`tab`页可能会重复的问题
- 修复编辑器未携带`RequestBody`的问题
- 优化`MagicDynamicDataSource`类的包路径
- 优化历史记录，当无记录时提示
- 优化编辑器样式，增强兼容性

## [v0.5.0] 2020.12.15
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
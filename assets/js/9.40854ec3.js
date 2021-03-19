(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(a,t,s){"use strict";s.r(t);var e=s(23),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"spring-boot配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot配置"}},[a._v("#")]),a._v(" spring-boot配置")]),a._v(" "),s("h2",{attrs:{id:"完整配置示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整配置示例"}},[a._v("#")]),a._v(" 完整配置示例")]),a._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("magic-api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /magic/web "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# UI请求的界面以及UI服务地址")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#配置存储方式")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" database "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置存储在数据库中")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tableName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" magic_api_file "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据库中的表名")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("datasource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" magic "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#指定数据源（单数据源时无需配置，多数据源时默认使用主数据源，如果存在其他数据源中需要指定。）")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("prefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /magic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("api "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# key前缀")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("readonly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 是否是只读模式")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("prefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" / "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 接口前缀，可以不配置")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("auto-import-module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" db  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 自动导入的模块")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("auto-import-package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" java.lang.*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("java.util.* "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#自动导包")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("refresh-interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#不启用刷新")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("allow-override")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#禁止覆盖应用接口")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sql-column-case")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" camel "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启用驼峰命名转换")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("editor-config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" classpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("./magic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("config.js "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#编辑器配置")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#配置JSON格式，格式为magic-script中的表达式")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      requestTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      executeTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("banner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打印banner")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("thread-pool-executor-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# async语句的线程池大小")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("throw-exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#执行出错时是否抛出异常")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cache-config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 缓存相关配置")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("capacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#缓存容量")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ttl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("-1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 永不过期，")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用缓存")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("page-config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" size "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 页大小的参数名称")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" page "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 页码的参数名称")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("default-page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 未传页码时的默认首页")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("default-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 未传页大小时的默认页大小")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("security-config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安全配置")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" admin "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 登录用的用户名")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 登录用的密码")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("swagger-config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" MagicAPI 接口信息\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" MagicAPI Swagger Docs\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" MagicAPI 接口\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /v2/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("docs/magic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("api/swagger2.json\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("debug-config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 断点超时时间，默认60s")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br")])]),s("h2",{attrs:{id:"prefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefix"}},[a._v("#")]),a._v(" prefix")]),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("null")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.prefix")]),a._v(" 接口路径的前缀，可空")]),a._v(" "),s("h2",{attrs:{id:"web"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[a._v("#")]),a._v(" web")]),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("null")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.web")]),a._v(" WEB页面的请求路径，可空，填写时开启，否则不开启，生产环境建议不开启")]),a._v(" "),s("h2",{attrs:{id:"workspace-v1-0-0-中删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workspace-v1-0-0-中删除"}},[a._v("#")]),a._v(" "),s("s",[a._v("workspace")]),a._v("(v1.0.0+中删除)")]),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("/data/magic-api")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.workspace")]),a._v(" "),s("code",[a._v("magic-api")]),a._v("的工作目录，当以"),s("code",[a._v("classpath:")]),a._v(" 开头时，则可以读jar内资源，且为只读模式(一般部署使用)。")]),a._v(" "),s("h2",{attrs:{id:"resource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[a._v("#")]),a._v(" resource")]),a._v(" "),s("h3",{attrs:{id:"type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[a._v("#")]),a._v(" type")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("file")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.resource.type")]),a._v(" 资源存储类型，默认为存文件，可选"),s("code",[a._v("file")]),a._v("、"),s("code",[a._v("database")]),a._v("、"),s("code",[a._v("file")])]),a._v(" "),s("h3",{attrs:{id:"location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[a._v("#")]),a._v(" location")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("/data/magic-api")]),a._v(" "),s("code",[a._v("magic-api.resource.location")]),a._v(" 文件存储位置，此项配置为"),s("code",[a._v("file")]),a._v("专用，当以"),s("code",[a._v("classpath:")]),a._v(" 开头时，则可以读jar内资源，且为只读模式(一般部署使用)。")])]),a._v(" "),s("h3",{attrs:{id:"tablename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tablename"}},[a._v("#")]),a._v(" tableName")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("magic_api_file")]),a._v(" "),s("code",[a._v("magic-api.resource.tableName")]),a._v(" 数据库存储时使用的表名，此项为"),s("code",[a._v("database")]),a._v("专用")])]),a._v(" "),s("h3",{attrs:{id:"datasource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasource"}},[a._v("#")]),a._v(" datasource")]),a._v(" "),s("ul",[s("li",[a._v("类型： "),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("null")]),a._v(" "),s("code",[a._v("magic-api.resource.datasource")]),a._v("指定数据源（单数据源时无需配置，多数据源时默认使用主数据源，如果存在其他数据源中需要指定。）")])]),a._v(" "),s("h3",{attrs:{id:"prefix-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prefix-2"}},[a._v("#")]),a._v(" prefix")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("magic-api")]),a._v(" "),s("code",[a._v("magic-api.resource.prefix")]),a._v(" 使用"),s("code",[a._v("database")]),a._v("、"),s("code",[a._v("redis")]),a._v("存储时的"),s("code",[a._v("key")]),a._v("前缀")])]),a._v(" "),s("h3",{attrs:{id:"readonly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readonly"}},[a._v("#")]),a._v(" readonly")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值: "),s("code",[a._v("false")]),a._v(" "),s("code",[a._v("magic-api.resource.readonly")]),a._v(" 是否为只读模式")])]),a._v(" "),s("h2",{attrs:{id:"banner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#banner"}},[a._v("#")]),a._v(" banner")]),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("true")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.banner")]),a._v(" 是否打印banner")]),a._v(" "),s("h2",{attrs:{id:"map-underscore-to-camel-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map-underscore-to-camel-case"}},[a._v("#")]),a._v(" map-underscore-to-camel-case")]),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("true")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.map-underscore-to-camel-case")]),a._v(" 是否开启下划线转驼峰命名")]),a._v(" "),s("h2",{attrs:{id:"throw-exception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throw-exception"}},[a._v("#")]),a._v(" throw-exception")]),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("false")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.throw-exception")]),a._v(" 执行出现异常时是否抛出异常（默认不抛出异常）")]),a._v(" "),s("h2",{attrs:{id:"datasource-v0-7-0-删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasource-v0-7-0-删除"}},[a._v("#")]),a._v(" "),s("s",[a._v("datasource(v0.7.0+ 删除)")])]),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("null")]),a._v("(默认数据源)")])]),a._v(" "),s("p",[s("code",[a._v("magic-api.datasource")]),a._v(" 接口存储选择的数据源（默认使用默认数据源）")]),a._v(" "),s("h2",{attrs:{id:"editor-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editor-config"}},[a._v("#")]),a._v(" editor-config "),s("Badge",{attrs:{text:"0.6.1+",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("null")]),a._v("(默认不配置)")])]),a._v(" "),s("p",[s("code",[a._v("magic-api.editor-config")]),a._v(" 编辑器配置文件路径,具体请参考"),s("a",{attrs:{href:"./magic-editor"}},[a._v("magic-editor配置")])]),a._v(" "),s("h2",{attrs:{id:"auto-import-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-import-module"}},[a._v("#")]),a._v(" auto-import-module "),s("Badge",{attrs:{text:"0.3.2+",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("db")]),a._v('(默认导入db模块，多个值时用","分隔)')])]),a._v(" "),s("p",[s("code",[a._v("magic-api.auto-import-module")]),a._v(" 默认导入的模块")]),a._v(" "),s("h2",{attrs:{id:"refresh-interval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refresh-interval"}},[a._v("#")]),a._v(" refresh-interval "),s("Badge",{attrs:{text:"0.3.4+",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("int")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("0")]),a._v(" （<=0为不启用）")])]),a._v(" "),s("p",[s("code",[a._v("magic-api.refresh-interval")]),a._v(" 自动刷新间隔(单位为秒)，开启后定期从数据库读取接口信息并刷新映射。")]),a._v(" "),s("h2",{attrs:{id:"auto-import-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-import-package"}},[a._v("#")]),a._v(" auto-import-package "),s("Badge",{attrs:{text:"0.4.0+",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("String")])]),a._v(" "),s("li",[a._v("默认值(v0.4.0+)："),s("code",[a._v("java.lang.*,java.util.*")]),a._v('(多个值时用","分隔，目前只支持以.*结尾的通配符)')]),a._v(" "),s("li",[a._v("默认值(v0.4.5+)："),s("code",[a._v("null")]),a._v("，"),s("code",[a._v("java.lang.*,java.util.*")]),a._v("转为内置自动导入")])]),a._v(" "),s("p",[s("code",[a._v("magic-api.auto-import-package")]),a._v(" 默认导入的包")]),a._v(" "),s("h2",{attrs:{id:"allow-override"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#allow-override"}},[a._v("#")]),a._v(" allow-override "),s("Badge",{attrs:{text:"0.4.0+",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("false")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.allow-override")]),a._v(" 是否允许覆盖应用接口")]),a._v(" "),s("h2",{attrs:{id:"thread-pool-executor-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread-pool-executor-size"}},[a._v("#")]),a._v(" thread-pool-executor-size "),s("Badge",{attrs:{text:"0.4.5+",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("int")])]),a._v(" "),s("li",[a._v("默认值 : "),s("code",[a._v("0")]),a._v(" "),s("code",[a._v("<=0")]),a._v(" 表示"),s("code",[a._v("CPU 核心数 * 2")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.thread-pool-executor-size")]),a._v(" 异步调用的线程池大小")]),a._v(" "),s("h2",{attrs:{id:"sql-column-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-column-case"}},[a._v("#")]),a._v(" sql-column-case "),s("Badge",{attrs:{text:"0.5.0+",type:"error"}})],1),a._v(" "),s("ul",[s("li",[a._v("类型："),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值 : "),s("code",[a._v("default")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.sql-column-case")]),a._v(" 列名转换规则")]),a._v(" "),s("h3",{attrs:{id:"可选值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可选值"}},[a._v("#")]),a._v(" 可选值")]),a._v(" "),s("ul",[s("li",[a._v("default (保持原样)")]),a._v(" "),s("li",[a._v("camel (驼峰命名)")]),a._v(" "),s("li",[a._v("pascal (帕斯卡命名)")]),a._v(" "),s("li",[a._v("upper (全大写)")]),a._v(" "),s("li",[a._v("lower (全小写)")])]),a._v(" "),s("h2",{attrs:{id:"page-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-config"}},[a._v("#")]),a._v(" page-config")]),a._v(" "),s("p",[a._v("分页配置")]),a._v(" "),s("h3",{attrs:{id:"page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[a._v("#")]),a._v(" page")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("page")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.page-config.page")]),a._v("页码参数名")]),a._v(" "),s("h3",{attrs:{id:"size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[a._v("#")]),a._v(" size")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("size")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.page-config.size")]),a._v("页大小参数名")]),a._v(" "),s("h3",{attrs:{id:"default-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-page"}},[a._v("#")]),a._v(" default-page")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("long")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("1")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.page-config.default-page")]),a._v("取不到页码参数时的默认页码")]),a._v(" "),s("h3",{attrs:{id:"default-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-size"}},[a._v("#")]),a._v(" default-size")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("long")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("10")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.page-config.default-size")]),a._v("取不到页大小参数时的默认页大小")]),a._v(" "),s("h2",{attrs:{id:"cache-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-config"}},[a._v("#")]),a._v(" cache-config")]),a._v(" "),s("p",[a._v("缓存配置")]),a._v(" "),s("h3",{attrs:{id:"enable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[a._v("#")]),a._v(" enable")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("boolean")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("false")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.cache-config.enable")]),a._v("是否开启缓存(默认缓存实现是LRU+TTL)")]),a._v(" "),s("h3",{attrs:{id:"capacity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capacity"}},[a._v("#")]),a._v(" capacity")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("long")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("10000")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.cache-config.capacity")]),a._v("缓存容量")]),a._v(" "),s("h3",{attrs:{id:"ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[a._v("#")]),a._v(" ttl")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("long")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("-1")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.cache-config.ttl")]),a._v("缓存过期时间，默认是"),s("code",[a._v("-1")]),a._v("即永不过期")]),a._v(" "),s("h2",{attrs:{id:"debug-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-config"}},[a._v("#")]),a._v(" debug-config")]),a._v(" "),s("p",[a._v("DEBUG配置")]),a._v(" "),s("h3",{attrs:{id:"timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[a._v("#")]),a._v(" timeout")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("int")])]),a._v(" "),s("li",[a._v("默认值："),s("code",[a._v("60")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.debug-config.timeout")]),a._v("DEBUG断点等待时间，单位秒，默认为60秒")]),a._v(" "),s("h2",{attrs:{id:"swagger-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swagger-config"}},[a._v("#")]),a._v(" swagger-config "),s("Badge",{attrs:{text:"0.3.0+",type:"error"}})],1),a._v(" "),s("p",[a._v("Swagger 配置")]),a._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" name")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("MagicAPI接口")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.swagger-config.name")]),a._v(" 资源名称")]),a._v(" "),s("h3",{attrs:{id:"location-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location-2"}},[a._v("#")]),a._v(" location")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("/v2/api-docs/magic-api/swagger2.json")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.swagger-config.location")]),a._v(" 资源位置")]),a._v(" "),s("h3",{attrs:{id:"title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[a._v("#")]),a._v(" title")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("MagicAPI Swagger Docs")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.swagger-config.title")]),a._v(" 文档标题")]),a._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("MagicAPI 接口信息")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.swagger-config.description")]),a._v(" 文档描述")]),a._v(" "),s("h3",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[a._v("#")]),a._v(" version")]),a._v(" "),s("ul",[s("li",[a._v("类型:"),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值:"),s("code",[a._v("1.0")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.swagger-config.version")]),a._v(" 文档版本")]),a._v(" "),s("h2",{attrs:{id:"security-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-config"}},[a._v("#")]),a._v(" security-config  "),s("Badge",{attrs:{text:"0.4.0+",type:"error"}})],1),a._v(" "),s("p",[a._v("安全配置")]),a._v(" "),s("h3",{attrs:{id:"username"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[a._v("#")]),a._v(" username")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值： "),s("code",[a._v("null")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.security-config.username")]),a._v(" 配置登录用的用户名，当用户名和密码都配置时，页面需登录才能访问")]),a._v(" "),s("h3",{attrs:{id:"password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[a._v("#")]),a._v(" password")]),a._v(" "),s("ul",[s("li",[a._v("类型: "),s("code",[a._v("string")])]),a._v(" "),s("li",[a._v("默认值： "),s("code",[a._v("null")])])]),a._v(" "),s("p",[s("code",[a._v("magic-api.security-config.password")]),a._v(" 配置登录用的密码，当用户名和密码都配置时，页面需登录才能访问")])])}),[],!1,null,null,null);t.default=r.exports}}]);
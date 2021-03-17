# 快速入门

### 引用
```xml
<!-- 以spring-boot-starter的方式引用 -->
<dependency>
	<groupId>org.ssssssss</groupId>
	<artifactId>magic-api-spring-boot-starter</artifactId>
    <version>magic-api-lastest-version</version>
</dependency>
```

### 配置
```properties
server.port=9999
#配置web页面入口
magic-api.web=/magic/web
#配置文件存储位置。当以classpath开头时，为只读模式
magic-api.resource.location=/data/magic-api
```
### 使用
启动项目之后，访问`http://localhost:9999/magic/web` 即可看到Web页面

# 快速入门

## 引用
```xml
<!-- 以spring-boot-starter的方式引用 -->
<dependency>
	<groupId>org.ssssssss</groupId>
	<artifactId>magic-api-spring-boot-starter</artifactId>
    <version>0.3.3</version>
</dependency>
```

## 配置
```properties
server.port=9999
#配置web页面入口
magic-api.web=/magic/web
#以下配置需跟实际情况修改
spring.datasource.url=jdbc:mysql://localhost/test
spring.datasource.username=root
spring.datasource.password=123456789
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
```
## 执行建表语句

建表语句请到[Gitee](https://gitee.com/ssssssss-team/magic-api)或者[Github](https://github.com/ssssssss-team/magic-api)下载

## 使用
启动项目之后，访问`http://localhost:9999/magic/web` 即可看到Web页面

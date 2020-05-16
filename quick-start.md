# 快速入门

## 引用
```xml
<!-- 以spring-boot-starter的方式引用 -->
<dependency>
	<groupId>org.ssssssss</groupId>
	<artifactId>magic-api-spring-boot-starter</artifactId>
    <version>0.1.1</version><!-- 需替换为最新版本号 -->
</dependency>
```

## 配置
```properties
server.port=9999
#配置magic-api的xml所在位置
magic-api.xml-locations: classpath*:magic-api/*.xml
#以下配置需跟实际情况修改
spring.datasource.url=jdbc:mysql://localhost/test
spring.datasource.username=root
spring.datasource.password=123456789
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
```

## 使用
在`src/main/resources/magic-api/`下建立`user.xml`文件
```xml
<?xml version="1.0" encoding="utf-8" ?>
<magic request-mapping="/user" 
        xmlns="http://ssssssss.org/schema"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://ssssssss.org/schema http://ssssssss.org/schema/magic-0.1.xsd">
    <!-- 访问地址/user/list,访问方法get,并开启分页 -->
    <select-list request-mapping="/list" request-method="get" page="true">
        select username,password from sys_user
    </select-list>
</magic>
```
## 测试
访问`http://localhost:9999/user/list`

结果如下：
```json
{
	"code": 1,
	"message": "success",
	"data": {
		"total": 2,
		"list": [{
			"password": "123456",
			"username": "admin"
		}, {
			"password": "1234567",
			"username": "1234567"
		}]
	},
	"timestamp": 1588586539249
}
```
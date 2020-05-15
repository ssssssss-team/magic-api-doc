# 常见问题

- [如何获取RequestBody中的参数](#如何获取requestbody中的参数)
- [如何获取Header中的参数](#如何获取header中的参数)
- [如何获取Cookie中的参数](#如何获取cookie中的参数)
- [如何获取Session中的参数](#如何获取session中的参数)
- [如何获取PathVariable中的参数](#如何获取pathvariable中的参数)
- [如何打印SQL语句](#如何打印sql语句)
- [如何给接口添加权限](#如何给接口添加权限)
- [如何返回自增主键](#如何返回自增主键)
- [插入时如何使用序列](#插入时如何使用序列)
- [${}和#{}的区别](#和-的区别)
- [多数据源如何配置](#多数据源如何配置)
- [SQL执行报错java.sql.SQLFeatureNotSupportedException: null](#sql执行报错java-sql-sqlfeaturenotsupportedexception-null)
- [如何自定义返回结果](#如何自定义返回结果)

## 如何获取RequestBody中的参数
使用`#{body.xxx}`或`${body.xxx}`获取`RequestBody`中的参数

## 如何获取Header中的参数
使用`#{header.xxx}`或`${header.xxx}`获取`Header`中的参数

## 如何获取Cookie中的参数
使用`#{cookie.xxx}`或`${cookie.xxx}`获取`Cookie`中的参数

## 如何获取Session中的参数
使用`#{session.xxx}`或`{session.xxx}`获取`Session`中的参数

## 如何获取PathVariable中的参数
使用`#{PathVariableName}`或`${PathVariableName}`获取`PathVariable`中的参数

## 如何打印SQL语句
需要修改配置文件`logging.level.org.ssssssss=debug`

## 如何返回自增主键
`insert`标签`return-type`值写`pk`时自动返回主键
```xml
<insert return-type="pk"></insert>
```

## 插入时如何使用序列
```xml
<!-- return-type必须为pk -->
<insert request-mapping="" return-type="pk">
    <!-- oracle 查询序列 -->
    <select-key key="id" order="before" type="select">
        select seq_xxxx.nextval from dual    
    </select-key>
    insert table_name(id,..........) values(#{id},.........)
</insert>
```
## 如何给接口添加权限

一般情况采用拦截器实现
在xml节点中添加：`data-code`属性
```xml
<select-list data-code="sys:user:view" request-mapping="/list" page="true">
    select * from sys_user
</select-list>
```
拦截器实现：
```java
@Component
@Order(1)   //拦截器顺序
public class PermissionInterceptor implements RequestInterceptor {

    @Override
    public Object preHandle(RequestContext context) {
        // 获取节点中配置的data-code属性
        String code = context.getStatement().getNodeData("code");
        // 获取session对象
        HttpSession session = context.getRequest().getSession();
        // 执行自己的代码逻辑进行判断是否有权限
        // ....
        if(无权限){
            return new JsonBean<>(-2,"无权访问");
        }
        // 放行
        return null;
    }
}
```

## ${}和#{}的区别
主要区别在于`${}`用于拼接SQL(会产生SQL注入问题)，`#{}`会替换成占位符（不会产生SQL注入问题），这里的区别于`Mybatis`一致

## 多数据源如何配置
编写java代码如下：
```java
@Bean
public DynamicDataSource dynamicDataSource(){
    DynamicDataSource dynamicDataSource = new DynamicDataSource();
    // 设置默认数据源（默认数据源一定要设置，且名称必须是null）
    dynamicDataSource.put(null,ds1);
    dynamicDataSource.put("slave",ds2);
    return dynamicDataSource;
}
```
XML中使用：
```xml
<!-- 使用slave数据源，如果不填则使用默认数据源 -->
<select-list datasource="slave" request-mapping="/list" page="true">
    select * from sys_user
</select-list>
```
## SQL执行报错java.sql.SQLFeatureNotSupportedException: null
原因：druid版本过低，升级至最新版后即可

## 如何自定义返回结果

通过自定义拦截器拦截返回自己想要的格式，具体定义方法查看[自定义拦截器](./custom-interceptor)
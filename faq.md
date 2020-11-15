## 常见问题

- [如何获取RequestBody中的参数](#如何获取requestbody中的参数)
- [如何获取Header中的参数](#如何获取header中的参数)
- [如何获取Cookie中的参数](#如何获取cookie中的参数)
- [如何获取Session中的参数](#如何获取session中的参数)
- [如何获取PathVariable中的参数](#如何获取pathvariable中的参数)
- [如何获取上传的文件](#如何获取上传的文件)
- [如何获取提交的数组参数](#如何获取提交的数组参数)
- [如何打印SQL语句](#如何打印sql语句)
- [如何给接口添加权限](#如何给接口添加权限)
- [如何给UI添加权限](#如何给UI添加权限)
- [对于UI界面如何使用Token鉴权](#对于UI界面如何使用Token鉴权)
- [${}和#{}的区别](#和-的区别)
- [如何循环拼接参数](#如何循环拼接参数)
- [多数据源如何配置](#多数据源如何配置)
- [运行时如何动态增删改数据源](#运行时如何动态增删改数据源)
- [SQL执行报错java.sql.SQLFeatureNotSupportedException: null](#sql执行报错java-sql-sqlfeaturenotsupportedexception-null)
- [如何自定义返回结果](#如何自定义返回结果)
- [页面加载缓慢](#页面加载缓慢)

## 如何获取RequestBody中的参数
脚本中使用`body.xxx`获取`RequestBody`中的参数
`SQL`中使用`#{body.xxx}`或`${body.xxx}`获取`RequestBody`中的参数

## 如何获取Header中的参数
脚本中使用`header.xxx`获取`Header`中的参数
`SQL`中使用`#{header.xxx}`或`${header.xxx}`获取`Header`中的参数

## 如何获取Cookie中的参数
脚本使用`cookie.xxx`获取`Cookie`中的参数
`SQL`中使用`#{cookie.xxx}`或`${cookie.xxx}`获取`Cookie`中的参数

## 如何获取Session中的参数
脚本中使用`session.xxx`获取`Session`中的参数
`SQL`中使用`#{session.xxx}`或`{session.xxx}`获取`Session`中的参数

## 如何获取PathVariable中的参数
脚本中使用`PathVariableName`或`path.xxxx`获取`PathVariable`中的参数
`SQL`中使用`#{PathVariableName}`或`#{path.xxx}`获取`PathVariable`中的参数

## 如何获取上传的文件

利用Request模块
```js
import request;
request.getFile('name');
```

## 如何获取提交的数组参数

利用Request模块
```js
import request;
return request.getValues('name');
```

## 如何打印SQL语句
和`JdbcTemplate`的打印SQL语句方式一样
```yml
logging:
  level:
    org:
      springframework:
        jdbc:
          core:
            JdbcTemplate: DEBUG #打印SQL
            StatementCreatorUtils: TRACE  #打印SQL参数
```
## 如何给接口添加权限

一般情况采用`拦截器`实现
在`接口选项`中添加
```json
{
  "permission" : "sys:user:view"
}
```
拦截器实现：
```java
@Component
@Order(1)   //拦截器顺序
public class PermissionInterceptor implements RequestInterceptor {

    @Override
    public Object preHandle(ApiInfo info, MagicScriptContext context) {
        // 获取配置的接口选项属性
        Object permissionCode = info.getOptionValue('permission');
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

## 如何给UI添加权限

采用`拦截器`实现
```java
@Component
public class UIPermissionInterceptor implements RequestInterceptor {
    @Override
    public boolean allowVisit(HttpServletRequest request, Authorization authorization) {
        // 这里可以根据实际情况进行修改
        // 不允许执行删除和保存方法
        return authorization != Authorization.DELETE && authorization != Authorization.SAVE;
    }
}
```
## 对于UI界面如何使用Token鉴权

目前不可以，请改用Cookie的方式鉴权。

## ${}和#{}的区别
主要区别在于`${}`用于拼接SQL(会产生SQL注入问题)，`#{}`会替换成占位符（不会产生SQL注入问题），这里的区别于`Mybatis`一致

## 如何循环拼接参数
两种办法：
- `in (#{ids})`的语法会自动对集合参数展开
```js
var ids = [1,2,3,4,5,6];
//会自动变成select * from sys_user where id in(?,?,?,?,?,?)
return db.select('select * from sys_user where id in(#{ids})'); 
```
- 循环拼接SQL
```js
var list = [1,2,3,4,5];
var sql = "select * from sys_user where ";
for(index,item in list){
    sql = sql + 'id = #{list['+index+']}';
    if(index + 1 < list.size()){
        sql = sql + ' or ';
    }   
}
return db.select(sql);
```

## 多数据源如何配置
编写java代码如下：
```java
@Bean
public MagicDynamicDataSource magicDynamicDataSource(){
    MagicDynamicDataSource dynamicDataSource = new MagicDynamicDataSource();
    // 设置默认数据源（默认数据源一定要设置）
    dynamicDataSource.setDefault(ds1);
    dynamicDataSource.add("slave",ds2);
    return dynamicDataSource;
}
```
脚本中使用：
```js
db.select('select * from sys_user');  //使用默认数据源
db.slave.select('select * from sys_user');  //使用slave数据源
```

## 运行时如何动态增删改数据源

需要将`MagicDynamicDataSource`对象注入进来，通过操作该对象的`add`、`delete`等方法进行操作

## SQL执行报错java.sql.SQLFeatureNotSupportedException: null
原因：druid版本过低，升级至最新版后即可

## 如何自定义返回结果

- 通过`自定义JSON结果`，具体定义方法查看[自定义JSON结果](./custom/json)
- 通过`自定义拦截器`拦截返回自己想要的格式，具体定义方法查看[自定义拦截器](./custom/interceptor)
- 通过`spring`的拦截器返回想要的格式，如`ResponseBodyAdvice`，`HandlerMethodReturnValueHandler`（这种方式目前会影响到UI,故不推荐使用）


## 页面加载缓慢

由于`monaco-editor`编辑器比较大，建议开启压缩静态资源
```properties
server.compression.enabled=true #启用压缩
server.compression.min-response-size=256 #大于256kb时压缩
```
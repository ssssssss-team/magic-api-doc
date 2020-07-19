# 集成Swagger

## Maven引入
```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.7.0</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.7.0</version>
</dependency>
```

## SpringBoot配置

当maven引入后文档就生效了，以下配置均可省略

```yaml
magic-api:
  swagger-config:
    # 资源名称
    name: MagicAPI
    # 资源描述
    description: MagicAPI v1.0 接口文档
    # 资源位置
    location: /v2/api-docs/magic-api/swagger2.json
    # 文档版本
    version: 1.0
    # 文档标题
    title: MagicAPI v1.0 接口文档
```
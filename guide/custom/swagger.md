# 集成Swagger <Badge text="0.3.0+" type="error"/>

## Maven引入
```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>
```
::: warning 警告
使用其他文档集成的，由于文档解析的差异性，不保证其兼容性。
:::
## SpringBoot配置

需在启动类加 **`@EnableSwagger2`**
以下配置是可选的配置项（可省略）

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
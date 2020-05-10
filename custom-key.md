# 自定义主键生成策略

```java
@Component
public class UUIDKeyProvider implements KeyProvider {

    @Override
    public String getName() {
        return "uuid";
    }

    @Override
    public Object getKey() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}

```

XML中写法
```xml
<insert .... return-type="pk">
    <select-key type="uuid" key="id"/>
    insert into table_name(id,.....) values(#{id},........)
</insert>
```
# 自定义数据库方言

主要目的是为实现分页语句

编写java代码如下：

```java
@Component
public class MyDialect implements Dialect {
    
    @Override
    public boolean match(String jdbcUrl) {
        // 根据jdbcUrl判断是否需要处理
        return jdbcUrl.contains(":mysql:");
    }

    @Override
    public String getPageSql(String sql, BoundSql boundSql, long offset, long limit) {
        boundSql.addParameter(offset);
        boundSql.addParameter(limit);
        return sql + " limit ?,?";
    }

}
```
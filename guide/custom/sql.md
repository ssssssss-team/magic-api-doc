# 自定义SQL拦截器 <Badge text="0.5.0+" type="error"/>

```java
@Component
public class MyqlInterceptor implements SQLInterceptor {
    
	@Override
	public void preHandle(BoundSql boundSql, RequestEntity requestEntity) {
       System.out.println("要执行的SQL:" + boundSql.getSql());
       System.out.println("要执行的SQL参数:" + Arrays.toString(boundSql.getParameters()));
       // 这里也可以通过boundSql的方法改写SQL和参数
	}
}
```
# 自定义拦截器

编写java代码如下：
```java
/**
 * 拦截请求
 */
@Component
@Order(1) //拦截器顺序，可选
public class MyInterceptor implements RequestInterceptor {

   /*
   * 当返回对象时，直接将此对象返回到页面，返回null时，继续执行后续操作
   */
   @Override
   public Object preHandle(RequestContext context) {
       System.out.println("请求前：" + context.getRequestMapping());
       // 拦截请求并直接返回结果，不继续后续代码
       // return new JsonBean<>(100,"拦截器2返回");
       // 放开请求，执行后续代码
       return null;
   }
    /**
     * 执行完毕之后执行
     * @param value 即将要返回到页面的值
     * @return 返回到页面的对象,当返回null时执行后续拦截器，否则直接返回该值，不执行后续拦截器
     */
   @Override
   public Object postHandle(RequestContext context, Object value) {
       System.out.println("请求后：" + context.getRequestMapping());
       System.out.println("返回结果：" + value);
       return null;
   }

}
```

以上配置会在`ssssssss`中生效，同时自带的获取分页参数会失效
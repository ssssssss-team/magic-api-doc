# 自定义获取分页参数

编写java代码如下：
```java
/**
 * 分页对象默认提取接口
 */
@Component
public class MyPageProvider implements PageProvider {

    /**
    *   此方法需要根据实际情况替换
    */
    @Override
    public Page getPage(MagicScriptContext context) {
        long page = 1;
        long pageSize = 100;
        // 计算limit以及offset
        return new Page((page - 1) * pageSize, pageSize);

    }
}
```

以上配置会在`magic-api`中生效，同时默认的获取分页参数会失效
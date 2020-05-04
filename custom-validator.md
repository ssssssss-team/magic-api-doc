# 自定义参数验证

```java
@Component
public class RegxValidator implements IValidator {

    @Override
    public String support() {
        return "regx";  //在xml中对应<regx>
    }

    @Override
    public boolean validate(Object input, Node node) {
        if (input instanceof String) {
            // 获取<regx value="xxx"></regx>中的value值
            String regx = DomUtils.getNodeAttributeValue(node, "value");
            if (StringUtils.isNotBlank(regx)) {
                return Pattern.compile(regx.trim()).matcher(input.toString()).matches();
            }
        }
        return false;
    }
}
```

XML中写法
```xml
<validate id="rule1">
    <param name="id">
        <regx value="\d+">id必须为数字</regx>
    </param>
</validate>
```
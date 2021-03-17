# 自定义脚本语言<Badge text="1.0.0+" type="error"/>

```java
/**
 * 自定义脚本语言
 */
@Component  //注入到Spring容器中
public class TestLanguage implements LanguageProvider {

	@Override
	public boolean support(String languageName) {
		return "test";
	}

	@Override
	public Object execute(String languageName, String script, Map<String, Object> context) throws Exception {
		return "hello " + context.get("name");
	}

}
```
在脚本中使用
```js
var name = "test variable"
var func = ```test
 // 任意代码
```;
return func();
//返回结果：hello test variable
```


# 自定义JSON结果

```java
@Component
public class CustomJsonValueProvider implements ResultProvider {
    /**
    *   定义返回结果，默认返回JsonBean
    */
	@Override
	public Object buildResult(int code, String message, Object data) {
        // 如果对分页格式有要求的话，可以对data的类型进行判断，进而返回不同的格式
		return new HashMap<String,Object>(){
			{
				put("status", code);
				put("msg", message);
				put("body", data);
			}
		};
	}
    /**
    *   定义分页返回结果，该项会被封装在Json结果内，
    *   此方法可以不覆盖，默认返回PageResult
    */
    @Override
	public Object buildPageResult(long total, List<Object> data) {
		return new HashMap<String,Object>(){
            {
                put("total", total);
                put("list", data);
            }
        };
	}
}
```
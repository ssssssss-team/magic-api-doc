# 自定义列名转换 <Badge text="0.5.0+" type="error"/>

```java

/**
 * 自定义命名转换
 */   
@Component
public class CustomMapperProvider implements ColumnMapperProvider {

	@Override
	public String name() {
        // 当配置完成后
        // 可以在配置文件中全局配置magic-api.sql-column-case=custom
        // 也可以在代码中写 db.columnCase('custom').select(); 来使用
		return "custom";
	}

	@Override
	public String mapping(String columnName) {
		// 自定义逻辑
		return 转换后的列名;
	}

	@Override
	public String unmapping(String name) {
		// 自定义逻辑实现将转换后的列名还原为转换前的列名
		return columnName;
	}
}
```


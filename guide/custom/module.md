# 自定义模块

编写java代码如下：
```java
import org.ssssssss.script.annotation.Comment;
@Component  //注入到Spring容器中
public class TestFunctions implements MagicModule {

    /**
    * 返回模块名，使用时通过import指令导入之后使用
    */
	@Override
	public String getModuleName() {
		return "test";    // 模块名称
	}
    
    /**
    *   调用打印方法
    */
    @Comment("方法名的注释(用于提示)")
	public void println(@Comment("参数名的提示(用于提示)")String value) {
		System.out.println(value);
	}
}
```
脚本中使用：
```js
import test;    //导入模块
test.println('Custom Module!'); 
```

全局导入模块  (application.yaml)
```yaml
# org.ssssssss.magicapi.spring.boot.starter.MagicAPIProperties#autoImportModule 
# 覆盖默认配置时候别忘了加上db (如果不需要可忽略)
magic-api:
  auto-import-module: db,test
```

使用全局模块
```js
test.println('Custom Module!'); 
```

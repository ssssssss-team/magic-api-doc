# 自定义接口存储

编写java代码如下：
```java

@Component  //注入到spring容器中
//这里选择实现ApiServiceProvider接口，也可以继承DefaultApiServiceProvider重写部分逻辑
public class CustomApiService implements ApiServiceProvider {
    
	@Override
	public boolean delete(String id) {
        // 根据ID删除接口信息
		return false;
	}

	@Override
	public boolean deleteGroup(String groupName) {
        // 根据ID删除接口信息
		return false;
	}

	@Override
	public List<ApiInfo> list() {
        // 查询所有接口信息（无需携带脚本信息，主要用于页面左侧列表展示）
		return null;
	}

	@Override
	public List<ApiInfo> listWithScript() {
        // 查询所有接口信息，需要带脚本信息，用于启动后注册接口
		return null;
	}

	@Override
	public ApiInfo get(String id) {
        // 查询接口详情
		return null;
	}

	@Override
	public boolean exists(String method, String path) {
        // 判断接口是否存在
		return false;
	}

	@Override
	public boolean existsWithoutId(String method, String path, String id) {
        // 判断接口是否存在（不包括id为传入参数的接口）
		return false;
	}

	@Override
	public boolean insert(ApiInfo info) {
        // 添加接口信息
		return false;
	}

	@Override
	public boolean update(ApiInfo info) {
        // 修改接口信息
		return false;
	}

	@Override
	public void wrap(ApiInfo info) {
		//对接口信息进行包装（可用于加密）
	}

	@Override
	public void unwrap(ApiInfo info) {
		//对接口信息解除包装（可用于解密）
	}
}

```
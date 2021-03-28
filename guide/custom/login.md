# 自定义用户名密码登录 <Badge text="1.0.0+" type="error"/>

```java
/**
 * 自定义用户名密码登录
 */
@Component  //注入到Spring容器中
public class CustomAuthorizationInterceptor implements AuthorizationInterceptor {

	/**
     * 配置是否需要登录
	 */
	@Override
	public boolean requireLogin() {
		return true;
	}

	/**
     * 根据Token获取User
	 */
	@Override
	public MagicUser getUserByToken(String token) throws MagicLoginException {
		if (判断token是否有效) {
			return magicUser;   // 从token中获取MagicUser对象
		}
		throw new MagicLoginException("token无效");
	}

	@Override
	public MagicUser login(String username, String password) throws MagicLoginException {
		// 根据实际情况进行修改。。
		if("admin".equals(username) && "admin".equals(password)){
			// 登录成功后 构造MagicUser对象。
			return new MagicUser("1","admin","tokenvalue......");
        }
		throw new MagicLoginException("用户名或密码不正确");
	}

}
```
# 在Java中调用接口

编写java代码如下：
```java
@Autowired  // 注入MagicAPIService对象
private MagicAPIService magicAPIService;

public Object invokeApi(){
    // 执行MagicAPI中的接口,返回原始内容，不包含code以及message信息
    return magicAPIService.execute('post','/user/add');
    // 执行MagicAPI中的接口,并传入参数,返回原始内容，不包含code以及message信息
    // return magicAPIService.execute('post','/user/add',map);
    // 执行MagicAPI中的接口,返回带code和message信息
    // return magicAPIService.call('post','/user/add');
    // 执行MagicAPI中的接口,并传入参数,返回带code和message信息
    // return magicAPIService.call('post','/user/add',map);
}
```

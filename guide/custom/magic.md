# Java相关接口
本接口主要是提供给Java调用，实现接口、函数、分组的增删改查、以及接口的调用

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
    // 其它接口请参考MagicAPIService中的方法以及注释
}

```

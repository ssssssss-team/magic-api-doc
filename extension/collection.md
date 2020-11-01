# 集合以及数组

为`Collection`,`Iterator`,`Enumeration`,`Object[]` 添加的扩展方法

## map
- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：将集合进行循环转换
```js
var list = [1,2,3,4,5];
return list.map(e=>e+1);    //返回[2,3,4,5,6]
```
## filter
- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：将集合进行过滤
```js
var list = [1,2,3,4,5];
return list.filter(e=>e>3);    //返回[4,5]
return list.filter((item,index)=>index>1);    //返回[3,4,5]
```
## each
- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：循环处理
```js
var list = [{
    name : '小明'
},{
  name : '小花'
}];
return list.each(item=>item.put('age',18));    //循环添加age属性
```

## sort <Badge text="0.4.2+" type="error"/>

- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：对集合进行排序
```js
var list = [1,5,2,3,6];
return list.sort((a,b)=>a-b);
```

## reserve <Badge text="0.4.2+" type="error"/>

- 返回值：`Object`
- 函数说明：对集合进行反转操作
```js
var list = [1,5,2,3,6];
return list.reserve();
```

## join <Badge text="0.4.2+" type="error"/>
- 入参：`separator` : `String` 分隔符
- 返回值：`String`
- 函数说明：对集合进行拼接操作
```js
var list = [1,5,2,3,6];
return list.join('-'); // 1-5-2-3-6
```

## shuffle <Badge text="0.4.2+" type="error"/>
- 返回值：`Object`
- 函数说明：对集合进行打乱处理
```js
var list = [1,5,2,3,6];
return list.shuffle();
```
# Map  <Badge text="0.4.6+" type="error"/>

为`java.util.Map` 添加的扩展方法

## asBean(转为Java对象) <Badge text="0.4.6+" type="error"/>

```js
import 'org.ssssssss.script.functions.User' as User;
var user = {
    age : 18,
    weight : 121,
    money : 123456789L,
    name : '法外狂徒',
    roles : [{
        name : 'admin',
        permissions : ['1','2','3']
    },{
      name : 'normal',
      permissions : ['4','5','6']
    }]
}
return user.asBean(User.class);
```

## sort <Badge text="0.4.7+" type="error"/>
- 入参：`comparator` ，比较器，可省略，如(k1,k2)=>k1.compareTo(k2);
- 返回值：`Map`
- 函数说明：对`Map`进行排序

```js
var map = {b : 2,a :1};
return map.sort(); // {a : 1,b : 2}
```

## each <Badge text="0.4.7+" type="error"/>
- 入参：`function` ，循环函数
- 返回值：`Map`
- 函数说明：对`Map`进行循环

```js
var map = {b : 2,a :1};
return map.each((key,value,source)=>{
    System.out.println(key + "=" + value);
})
```

## asString <Badge text="0.4.7+" type="error"/>
- 入参：`separator` ： `String` key与key之间的分隔符 如`&`
- 入参：`join` ： `String` key与value之间的分隔符 如`=`
- 返回值：`Map`
- 函数说明：将`Map`转为`String`

```js
var map = {b : 2,a :1};
return map.asString('&','=')    // b=2&a=1
```

## asString <Badge text="0.4.7+" type="error"/>
- 入参：`separator` ： `String` key与key之间的分隔符 如`&`
- 入参：`mapping` ： `Function` 转换方法，如：(key,value)=>key + '=' + value || ''
- 返回值：`Map`
- 函数说明：将`Map`转为`String`

```js
var map = {b : 2,a :1};
return map.asString('&',(key,value)=>key + '=' + value || '')    // b=2&a=1
```

## asList <Badge text="0.4.7+" type="error"/>
- 入参：`separator` ： `String` key与key之间的分隔符 如`&`
- 入参：`mapping` ： `Function` 映射函数，如:`(key,value,source)=>{'k' : key,'v' : value}`
- 返回值：`List`
- 函数说明：将`Map`转为`List`

```js
var map = {b : 2,a :1};
return map.asList((key,value,source)=>{'k' : key,'v' : value})  
/* 
  [
    {"k": "b","v": 2},
    {"k": "a","v": 1}
  ]
*/
```

## merge <Badge text="0.4.7+" type="error"/>
- 入参：`key` ： `Object` 要合并的`key`值
- 入参：`value` ： `Object`要合并的`value`值
- 返回值：`Map`
- 函数说明：合并`Map`

```js
var map = {b : 2,a :1};
return map.merge('c',3)  //{b : 2,a :1,c : 3};
```

## merge <Badge text="0.4.7+" type="error"/>
- 入参：`map` ： `Map`要合并的的另一个map
- 返回值：`Map`
- 函数说明：合并`Map`

```js
var map  = {b : 2,a :1};
var map1 = {c : 3,d :4};
return map.merge(map1)  //{b : 2,a :1,c : 3,d : 4};
```
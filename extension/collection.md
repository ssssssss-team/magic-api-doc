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

## join(拼接) <Badge text="0.4.2+" type="error"/>
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

## max <Badge text="0.4.5+" type="error"/>
- 返回值：`Object`
- 函数说明： 取出集合最大值，如果找不到返回null
```js
var list = [1,6,8,9,18,12];
return list.max();  // 18
```

## min <Badge text="0.4.5+" type="error"/>
- 返回值：`Object`
- 函数说明： 取出集合最小值，如果找不到返回null
```js
var list = [6,1,8,9,18,12];
return list.min();  // 1
```
## sum <Badge text="0.4.5+" type="error"/>
- 返回值：`Object`
- 函数说明： 累加求和，计算不出返回0.0
```js
var list = [1,2,3,4];
return list.sum();  // 10
```

## avg <Badge text="0.4.5+" type="error"/>
- 返回值：`Object`
- 函数说明： 计算平均值，计算不出返回null
```js
var list = [1,2,3,4];
return list.avg();  // 2.5
```

## group <Badge text="0.4.5+" type="error"/>
- 入参：`condition` : `Function` 分组条件 如:`item=>item.xxx` 根据xxx字段分组
- 入参：`mapping` : `Function` 结果映射(省略时不做映射返回List) 如:`list=>list.sum()` 分组求和
- 返回值：`Map<Object, List<Object>>`或`Map<Object, Object>`
- 函数说明： 分组
```js
// List<Map<String,Object>>
var result = [
    { xxx : 1, yyy : 2, value : 11},
    { xxx : 1, yyy : 2, value : 22},
    { xxx : 2, yyy : 2, value : 33}
];


return result.group(item=>item.xxx + '_' + item.yyy)
/*
Map<Object,List<Object>>
{
    "1_2": [
            {"yyy": 2, "xxx": 1, "value": 11},
            {"yyy": 2, "xxx": 1, "value": 22}
    ],
    "2_2": [{"yyy": 2, "xxx": 2, "value": 33 }]
}
*/

return result.group(item=>item.xxx + '_' + item.yyy,list=>{
    count : list.size(),
    sum : list.map(v=>v.value).sum(),
    avg : list.map(v=>v.value).avg()
})
/*
Map<Object,Object>
{
    "1_2": { "avg": 16.5, "count": 2, "sum": 33 },
    "2_2": { "avg": 33,   "count": 1, "sum": 33 }
}
*/


```

## join(关联) <Badge text="0.4.5+" type="error"/>
- 入参：`target` : `Object` 分组条件 如:`item=>item.xxx` 根据xxx字段分组
- 入参：`condition` : `Function` 关联条件 如:`(left,right)=>left.xxx == right.xxx`
- 入参：`mapping` : `Function` 结果映射(省略时会将两个对象合并处理)如:`(left,right)=>{xxx : left.xxx, yyy : right.yyy}`
- 返回值：`List<Object>`
- 函数说明： 将两个集合管理起来
```js
var year2019 = [
    { "pt":2019, "item_code":"code_1", "sum_price":2234 },
    { "pt":2019, "item_code":"code_2", "sum_price":234 },
    { "pt":2019, "item_code":"code_3", "sum_price":12340 },
    { "pt":2019, "item_code":"code_4", "sum_price":2344 }
];
var year2018 = [
    { "pt":2018, "item_code":"code_1", "sum_price":1234.0 },
    { "pt":2018, "item_code":"code_4", "sum_price":1234.0 }
];
return year2019.join(year2018, (left,right)=>left.item_code == right.item_code,  (left,right)=>{
   '年份' : left.pt,
   '编号' : left.item_code,
   '今年' : left.sum_price,
   '去年' : right == null ? 'unknow' : right.sum_price,
   '环比去年增长' : right == null ? '-': (((left.sum_price - right.sum_price) / right.sum_price * 100) + "%")
});
/*
[
    {"年份": 2019, "今年": 2234, "去年": 1234, "环比去年增长": "81.03728%", "编号": "code_1"},
    {"年份": 2019, "今年": 234, "去年": "unknow", "环比去年增长": "-", "编号": "code_2"},
    {"年份": 2019, "今年": 12340,"去年": "unknow","环比去年增长": "-","编号": "code_3"},
    {"年份": 2019, "今年": 2344, "去年": 1234, "环比去年增长": "89.95138%", "编号": "code_4"}
]
*/
```

## asBean(转为Java对象) <Badge text="0.4.6+" type="error"/>
- 入参：`target` : `Class<?>` 目标类型 
- 返回值：`List<?>`
- 函数说明： 将`List<Object>` 转为目标`List`

```js
import 'org.ssssssss.script.functions.User' as User;
var userList = [{
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
}]
return userList.asBean(User.class);
```
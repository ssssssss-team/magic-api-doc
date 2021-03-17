# 结果转换

## List转换
```javascript
var list = [
    {sex : 0,name : '小明',age : 19},
    {sex : 1,name : '小花',age : 18}
];
var getAge = (age) => age > 18 ? '成人' : '未成年'
// 利用map函数对list进行过滤
return list.map((item)=>{
    age : getAge(item.age),
    sex : item.sex == 0 ? '男' : '女',
    name : item.name
});
// 以上代码可以使用Linq代替
return 
    select 
        t.age > 18 ? '成人' : '未成年' age,
        t.sex == 0 ? '男' : '女' sex,
        t.name
    from list t;
/*结果
[{
    "sex": "男",
    "name": "小明",
    "age": "成人"
},{
    "sex": "女",
    "name": "小花",
    "age": "未成年"
}]
*/
```
## List过滤
```javascript
var list = [
    {sex : 0,name : '小明'},
    {sex : 1,name : '小花'}
]
// 利用map函数对list进行过滤
return list.filter((item)=>item.sex == 0);
// 以上代码可以使用linq代替
return select * from list t where t.sex = 0
/* 结果
[{
    "sex": 0,
    "name": "小明"
}]
*/
```
## List过滤和转换
```javascript
var list = [
    {sex : 0,name : '小明'},
    {sex : 1,name : '小花'}
]
// 利用map函数对list进行过滤，然后进行转换
return list.filter((item)=>item.sex == 0).map((item)=>{
    sex : item.sex == 0 ? '男' : '女',
    name : item.name
});
// 以上代码可以使用linq代替
return select t.sex ==0 ? '男' : '女' sex ,t.name from list t where t.sex = 0
/* 结果
[{
    "sex": "男",
    "name": "小明"
}]
*/
```

## List分组
```javascript
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
## List关联
```javascript
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
// 以上代码可以使用linq代替
return 
    select 
        t.pt 年份,
        t.item_code 编号,
        t.sum_price 今年,
        ifnull(t1.sum_price,'unknow') 去年,
        // ifnull 会对参数进行计算，会报错 所以这里采用三元运算符
        t1.sum_price == null ? '-' : ((t.sum_price - t1.sum_price) / t1.sum_price).asPercent(2) 环比去年增长 
    from year2019 t
    left join year2018 t1 on t.item_code = t1.item_code
/*
[
    {"年份": 2019, "今年": 2234, "去年": 1234, "环比去年增长": "81.03728%", "编号": "code_1"},
    {"年份": 2019, "今年": 234, "去年": "unknow", "环比去年增长": "-", "编号": "code_2"},
    {"年份": 2019, "今年": 12340,"去年": "unknow","环比去年增长": "-","编号": "code_3"},
    {"年份": 2019, "今年": 2344, "去年": 1234, "环比去年增长": "89.95138%", "编号": "code_4"}
]
*/
```


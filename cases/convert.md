# 结果转换

## List转换
```javascript
var list = [{
    sex : 0,
    name : '小明',
    age : 19
},{
    sex : 1,
    name : '小花',
    age : 18
}];

var getAge = (age)=>{
    return age > 18 ? '成人' : '未成年'
}
// 利用map函数对list进行过滤
return list.map((item)=>{
    age : getAge(item.age),
    sex : item.sex == 0 ? '男' : '女',
    name : item.name
});
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
var list = [{
    sex : 0,
    name : '小明'
},{
    sex : 1,
    name : '小花'
}]
// 利用map函数对list进行过滤
return list.filter((item)=>item.sex == 0);
/* 结果
[{
    "sex": 0,
    "name": "小明"
}]
*/
```
## List过滤和转换
```javascript
var list = [{
    sex : 0,
    name : '小明'
},{
    sex : 1,
    name : '小花'
}]
// 利用map函数对list进行过滤，然后进行转换
return list.filter((item)=>item.sex == 0).map((item)=>{
    sex : item.sex == 0 ? '男' : '女',
    name : item.name
});
/* 结果
[{
    "sex": "男",
    "name": "小明"
}]
*/
```

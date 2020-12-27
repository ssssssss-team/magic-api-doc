# Linq <Badge text="0.5.5+" type="error"/>

## 基本语法
```sql
    select 
        tableAlias.*|[tableAlias.]field[ columnAlias]
        [,tableAlias.field2[ columnAlias2][,…]]
    from expr[,…] tableAlias
    [[left ]join expr tableAlias2 on condition]
    [where condition]
    [group by tableAlias.field[,...]]
    [having condition]
    [order by tableAlias.field[asc|desc][,tableAlias.field[asc|desc]]]
```
> 需要注意的是，select、from、left join、group by、having、order by、asc、desc、on、and、or 是区分大小写的
### 执行步骤

- 先从`from`子句创建虚拟表VT1
- 处理`join`，创建虚拟表VT2，筛选符合条件`condition`的行加入到虚拟表VT2中
- 处理`where` 将符合`condition`的行加入虚拟表VT1中
- 处理`group by` 对虚拟表VT1、VT2进行分组操作，将符合`having condition`的值加入虚拟表VT3中
- 处理`select` 从VT3中选择指定的列，加入虚拟表VT4中
- 处理`order by` 对虚拟表VT4进行排序

## select子句
```sql
select t.name,sum(t.score) score,t.*
```
> select 中带有聚合函数的，应该有group by语句，否则不会进行聚合处理
## from子句
```sql
-- 以下三种方式均可（别名是必须的）
from [{name: 'Gitee'},[name:'Github']] t
from results t
from {name:'Gitee'} t
```
> from 跟着的必须是List或者Map
## join子句
```sql
-- 以下三种方式均可（别名是必须的）
[left] join [{name: 'Gitee'},[name:'Github']] t1 on t1.name = t.name
[left] join results t1 on 1 = 1
[left] join {name:'Gitee'} t1 on t1.name = 'Gitee' and 1=1
```
> join只会关联一条，关联不上则会过滤掉这一行
>
> left join 会关联所有符合条件的行，对于关联不上的不做过滤
## where子句
```sql
-- or 等价于|| and 等价于 && 可以混合使用。
where t.name = 'Gitee' or t.name = 'Github' and 1=1 && 2=2
```

## group by子句
```sql
-- 分组操作
group by t.name, t1.xxx
```

## having 子句
```sql
-- 筛选分组后的数量大于 1 的
having count(t.name) > 1
```

## order by子句
```sql
-- asc可以不写，默认是asc
order by t.name desc,t.xxx 
```
# DSL

查询表达式(Query DSL)是一种非常灵活又富有表现力的 查询语言。 Elasticsearch 使用它可以以简单的 JSON 接口来展现 Lucene 功能的绝大部分。在你的应用中，你应该用它来编写你的查询语句。它可以使你的查询语句更灵活、更精确、易读和易调试。

将查询表达式传递给 query 参数：

```
{
    query: YOUR_QUERY_HERE
}
```

空查询：
```
{
    query: {
        match_all: {}
    }
}
```

## 查询语句的结构

典型结构：

```
{
    QUERY_NAME: {
        ARGUMENT: VALUE,
        ARGUMENT: VALUE,...
    }
}
```

针对某个字段的查询结构：

```
{
    QUERY_NAME: {
        FIELD_NAME: {
            ARGUMENT: VALUE,
            ARGUMENT: VALUE,...
        }
    }
}
```

例如：

```
{
    query: {
        match: {
            name: "elasticsearch"
        }
    }
}
```

合并查询：

```

```


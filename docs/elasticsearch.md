# Elasticsearch

* 安装
* JavaScript 客户端
* CRUD
    * 建立连接
    * 创建索引
    * 查询
    * 多文档查询
    * 更新
    * 删除
* 搜索
* 集群

## 安装

* download
* run `bin/elasticsearch`
* `http://localhost:9200/`

## JavaScript 客户端

```
npm i elasticsearch
OR
yarn add elasticsearch
```

## CRUD

### 建立连接

```
const elasticsearch = require('elasticsearch');

const escClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

escClient.ping({
    requestTimeout: 1000
}, (err) => {
    if(err) {
        console.trace('elasticsearch cluster is down!');
    }
    else {
        console.log('elasticsearch connected:' + err);
    }
});
```

### 创建索引

* rest
```
// PUT /{index}/{type}/{id}
PUT /hello-users/user/1

{
    "name": "Jay",
    "age": 100,
    "gender": "male"
}
```

* node_model: create
```
escClient.create({
    index: 'hello-users',
    type: 'user',
    id: '1',
    body: {
        name: 'Jay',
        age: 100,
        gender: 'male'
    }
}).then(res => {
    console.log(res);
});
```

### 查询

* rest
```
// GET /{index}/{type}/{id}
GET /hello-users/user/1
```

* node_model: get
```
escClient.get({
    index: 'hello-users',
    type: 'user',
    id: 1
}).then(res => {
    console.log(res);
});
```

### 多文档查询

* node_model: mget
```
escClient.mget({
    index: 'hello-users',
    type: 'user',
    body: {
        ids: [1,2,3]
    }
}).then(res => {
    res.docs.forEach(item => {
        console.log(item._source);
    });
})
```

### 更新

* rest: _create
```
PUT /hello-users/user/1/_create
{

}
```

* node_model: update
```
escClient.update({
    index: 'hello-users',
    type: 'user',
    id: '1',
    body: {
        doc: {
            name: 'Jay',
            age: 98,
            gender: 'male'
        }
    }
}).then(res => {
    console.log(res);
});
```

* node_model: insert
```
escClient.update({
    index: 'hello-users',
    type: 'user',
    id: '2',
    body: {
        doc: {},
        upsert: {
            gender: 'female',
            name: 'Mini',
            age: 90
        }
    }
}).then(res => {
    console.log(res);
});
```

### 删除

* rest: delete
```
// DELETE /{index}/{type}/{id}
DELETE /hello-users/user/1
```

* node_model: delete
```
escClient.delete({
    index: 'hello-users',
    type: 'user',
    id: '1'
});
```

## 搜索

## 集群

## Test

* http://10.5.11.210:9200/_cat/indices?v

## 参考

* https://www.infoq.cn/article/database-timestamp-02?utm_source=infoq&utm_medium=related_content_link&utm_campaign=relatedContent_articles_clk
* https://www.cnblogs.com/dreamroute/p/8484457.html
* https://www.cnblogs.com/vianzhang/p/7922426.html

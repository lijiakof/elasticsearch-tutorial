const elasticsearch = require('elasticsearch');

const escClient = new elasticsearch.Client({
    host: '10.5.11.210:9200',
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

// escClient.exists({
//     index: 'hello-users',
//     type: 'user',
//     id: 1
// }).then(res => {
//     console.log(res);
// });

// escClient.indices.delete({
//     index: 'hello2-users',
// }).then(res => {
//     console.log(res);
// });

escClient.get({
    index: 'hello-users',
    type: 'user',
    id: 1
}).then(res => {
    console.log(res);
});

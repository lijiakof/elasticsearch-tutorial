const elasticsearch = require('elasticsearch');

const escClient = new elasticsearch.Client({
    host: '10.5.11.210:9200',
    // log: 'trace'
});

escClient.ping({
    requestTimeout: 1000
}, (err) => {
    if (err) {
        console.trace('elasticsearch cluster is down!');
    }
    else {
        console.log('elasticsearch connected:' + err);
    }
});

module.exports = escClient;
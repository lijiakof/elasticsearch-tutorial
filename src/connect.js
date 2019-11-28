const elasticsearch = require('elasticsearch');

const escClient = new elasticsearch.Client({
    host: '10.5.11.86:9200',
    // log: 'trace'
});

escClient.ping({
    requestTimeout: 1000
}, (err) => {
    if (err) {
        console.trace('elasticsearch cluster is down!' + err);
    }
    else {
        console.log('elasticsearch connected');
    }
});

module.exports = escClient;
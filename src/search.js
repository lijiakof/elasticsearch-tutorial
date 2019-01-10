const esc = require('./connect');

// Query DSL
esc.search({
    index: 'hello-users',
    body: {
        query: {
            match: {
                name: 'Jay'
            }
        }
    }
}).then(res => {
    console.log(res);
});
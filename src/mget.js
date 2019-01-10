const esc = require('./connect');

esc.mget({
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
const esc = require('./connect');

esc.get({
    index: 'hello-users',
    type: 'user',
    id: 1
}).then(res => {
    console.log(res);
});
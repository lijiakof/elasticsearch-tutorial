const esc = require('./connect');

esc.get({
    index: 'hello-users',
    type: 'user',
    id: 2
}).then(res => {
    console.log(res);
});
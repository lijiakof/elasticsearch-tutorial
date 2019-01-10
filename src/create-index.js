const esc = require('./connect');

esc.create({
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
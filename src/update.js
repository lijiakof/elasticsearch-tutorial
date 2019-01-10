const esc = require('./connect');

esc.update({
    index: 'hello-users',
    type: 'user',
    id: '2',
    body: {
        doc: {
            name: 'Mini',
            age: 91,
            gender: 'female'
        }
    }
});
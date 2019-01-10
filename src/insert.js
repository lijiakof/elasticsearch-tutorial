const esc = require('./connect');

esc.update({
    index: 'hello-users',
    type: 'user',
    id: '3',
    body: {
        doc: {},
        upsert: {
            name: 'Lily',
            age: 70,
            gender: 'female'
        }
    }
});
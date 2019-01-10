const esc = require('./connect');

esc.delete({
    index: 'hello-users',
    type: 'user',
    id: '3'
});
const EventEmitter = require('events');

const pingPongEmitter = new EventEmitter();


pingPongEmitter.on('ping', () => {
    console.log('Got a ping!');
    setTimeout(() => {pingPongEmitter.emit('pong');}, 3000);
});

pingPongEmitter.on('pong', () => {
    console.log('Got a pong!');
    setTimeout(() => {pingPongEmitter.emit('ping');}, 1000);
});

// trigger
pingPongEmitter.emit('pong');
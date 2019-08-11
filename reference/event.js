const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {}

//inint object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

//init event
myEmitter.emit('event');
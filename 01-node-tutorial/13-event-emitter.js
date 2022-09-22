// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

//Node js uses events module to create and handle custom events.
//The EventEmitter class can be used to create and handle custom events module.


//event emitter is a synchronous

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
//on - listen for an event
//emit - emit an event
// keep track of the order
// additional arguments
// built-in modules utilize it

//on is used for listening 
let id =0 ;
customEmitter.on('response', (name) => {
  console.log(`data recieved user ${name} with id:${++id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.on('response',() =>{
  console.log(++id);
})
//emit is used for output
customEmitter.emit('response', 'john');

// event emitter can be changed to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods

// if we use customEmitter.once() it will register a listner that is called at most once for a particular event. Once the event is emitted , the listener is unregistered and then call (ignored if call more than 1)

customEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
customEmitter.emit('event', 'a', 'b');

customEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
customEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error
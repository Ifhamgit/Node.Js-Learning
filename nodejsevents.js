const EventEmitter = require('node:events');
const { domainToASCII } = require('node:url');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Alarm', () => {
  console.log('Wakeup to reality!');
  setTimeout(() => {
    console.log("Wakeup to reality a gentle reminder")
  }, 3000);
});
myEmitter.emit('Alarm');
// Whole code tempelate availaible on the official docs
console.log("Run me first plz")
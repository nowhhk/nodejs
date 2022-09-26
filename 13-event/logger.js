const EventEmitter = require('events');
// const emitter = new EventEmitter();

// EventEmitter는 한번 객체를 만들면 그 객체 내에서 발생하는 이벤트에 한해서 들을수있다.
// 여러가지 이벤트에미터 객체를 만들면, 다른Emitter에서 발생하는 이벤트는 다른 Emitter에서 들을 수 없다.
class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger;

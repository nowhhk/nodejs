const fs = require('fs');
//브라우저용인지 노드용인지 모름. 노드용인지 알려줌

console.log(global);
//global 객체

global.hello = () => {
  global.console.log('hello');
};

global.hello();
hello();

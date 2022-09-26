const fs = require('fs');

// 3
// rename(...., callback(error, data))
// try { renameSync(....) } catch(e) { } 동기적 , 에러발생하면 뒤로 넘어가지않으니 가급적 사용하지않음
// promises.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error);
}

//비동기적 , 비동기적코드 어떤게 먼저 수행할지 모름
fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');
//비동기적
fs.promises
  .rename('./text2.txt', './text-new.txt') //
  .then(() => console.log('Done!'))
  .catch(console.error);

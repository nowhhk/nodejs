const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
  //   highWaterMark: 8, // 기본값 64 kbytes //한번에 얼만큼 데이터를 읽어올수있는지
  //   encoding: 'utf-8',
});

const beforeMem = process.memoryUsage().rss;
const data = [];
readStream.once('data', (chunk) => {
  // console.log(chunk);
  data.push(chunk);
  console.count('data');
  readStream.close();
});

readStream.on('close', () => {
  console.log(data.join(''));
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});
readStream.on('error', (error) => {
  console.log(error);
});

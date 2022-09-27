const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf8') //
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello :) ') //
  .catch(console.error);

fs.appendFile('./file.txt', 'Yo!:) ') //
  .catch(console.error);

// copy
fs.copyFile('./file.txt', './file2.txt') //
  .catch(console.error);

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

fs.readdir('./') // 해당하는 경로에 있는 모든 파일 읽어오기
  .then(console.log)
  .catch(console.error);

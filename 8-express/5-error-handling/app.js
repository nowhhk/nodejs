import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

//동기적 코드는 에러처리를 하지않아도 외부에서 에러처리하는 미들웨어에서 포착가능하지만, 비동기적(프로미스 asunc await)는 외부에서 감지못함.

app.get('/file1', (req, res) => {
  // 1. 비동기readFile 는 내부적으로 에러 발생하기때문에, 해당하는 콜백함수내에서 에러처리를 해줘야한다.
  // fs.readFile('/file1.txt', (err, data) => {
  //   if (err) {
  //     res.sendStatus(404);
  //   }
  // });

  // 2.동기 readFileSync
  try {
    const data = fs.readFileSync('/file1.txt');
  } catch (error) {
    res.sendStatus(404).send('not found');
  }
});

// promise 비동기, 1.try-catch로 에러를잡을수 없다. 내부에서 catch
app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file2.txt') //
    .then((data) => {})
    .catch((error) => {
      res.sendStatus(404);
    });
});

// 2.다음 미들웨어로 전달
// app.get('/file2', (req, res, next) => {
//   fsAsync
//     .readFile('/file2.txt') //
//     .catch(next);
// });

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
  } catch {
    res.sendStatus(404);
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);

import express from 'express';

const app = express();

// 등록해준 미들웨어에서는 항상 res를 하거나, next를 호출해서 흐름이 이어지게 해야한다.
app.get(
  '/',
  (req, res, next) => {
    // 꼭 하나로 끝나야 함
    // next();
    // next('router');
    // next(new Error('error'))
    // res.send..
    res.send('<h1>Index page!</h1>');
  },
  (req, res, next) => {
    return next();
    res.send('<h1>Index page</h1>');
  }
);

app.get('/', (req, res, next) => {
  res.send('<h1>Index page</h1>');
});

app.use((err, req, res, next) => {
  console.error('error!');
  res.sendStatus(500);
});

app.listen(8080);


// app.all('/api/*') - 정확히 맞는url 에 미들웨어 등록
// app.use('/api') - 그 url를 포함하는 모든 url
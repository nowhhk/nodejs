// TIPS

// 1.debugger WATCH에서 흐름을 지켜보고싶은 변수나 표현식추가해서 볼 수 있다.
// ex) x + y, result, i===stop (T or F), i

// 2. debugger VARIABLES 에서 직접 변수값 수정가능

// 3. breakpoint 빨간점우클릭 edit 에서 조건걸기 가능 (ex) i===3 )

// 4. 디버깅 중 코드수정되면 디버깅 자동으로 다시 시작 > create a launch.json file

function sayHello() {
  console.log('hello');
}

function calculate(x, y) {
  console.log('calc');
  const result = x + y;
  console.log('result:', result);
  sayHello();
  return result;
}

calculate(1, 2);

const stop = 4;
console.log('looping');

for (let i = 0; i < 10; i++) {
  console.log('count', i);
  if (i === stop) {
    break;
  }
}

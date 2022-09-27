function hello() {
  console.log('this', this);
  console.log(this === global); //true
}

hello();
// => 함수안에서 this를 호출하면 global 이다.

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('----- class -----');
    console.log(this); //A { num: 1 }
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();
// => 클래스 안에 있는 this는 클래스자제를 가르키고, global이 아니다.

console.log('--- global scope ---');
console.log(this); // {}
console.log(this === module.exports);

// => 브라우저에서 밖에서 쓰이는 this는 글로벌을 가르키지만, 노드제이에서 this는 module.exports를 가르킨다.
